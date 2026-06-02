const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@aiguaroca.com";
const EMAIL_FROM = process.env.EMAIL_FROM || `Aiguaroca <${ADMIN_EMAIL}>`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VIDEO_NAME_REGEX = /^[a-z0-9._-]+\.mp4$/i;

function getSmtpConfig() {
  const port = Number(process.env.SMTP_PORT || 587);

  return {
    host: process.env.SMTP_HOST || "smtp.ionos.es",
    port,
    secure:
      process.env.SMTP_SECURE === "true" ||
      (process.env.SMTP_SECURE !== "false" && port === 465),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };
}

function createMailTransporter() {
  const config = getSmtpConfig();

  if (!config.auth.user || !config.auth.pass) {
    const error = new Error("Missing EMAIL_USER or EMAIL_PASS");
    error.code = "EMAIL_CONFIG_MISSING";
    throw error;
  }

  return nodemailer.createTransport(config);
}

function logMailError(context, error) {
  console.error(`${context}:`, {
    message: error.message,
    code: error.code,
    command: error.command,
    responseCode: error.responseCode,
    response: error.response,
  });
}

function sanitizeText(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, maxLength);
}

function validateEmailPayload(fields) {
  const missingFields = Object.entries(fields)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingFields.length > 0) {
    return `Missing required fields: ${missingFields.join(", ")}`;
  }

  if (fields.email && !EMAIL_REGEX.test(fields.email)) {
    return "Invalid email";
  }

  return null;
}

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later" },
});
const STATIC_ASSET_CACHE = "public, max-age=31536000, immutable";

const corsOptions = {
  origin: ["https://www.aiguaroca.com", "http://localhost:3000"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(["/api/v1/send-email", "/api/v1/subscribe", "/api/v1/contact"], emailLimiter);

app.use(
  "/api/v1/assets",
  express.static(path.join(__dirname, "assets"), {
    immutable: true,
    maxAge: "1y",
    setHeaders: (res) => {
      res.setHeader("Cache-Control", STATIC_ASSET_CACHE);
    },
  })
);

app.get("/api/v1/", (req, res) => {
  res.send("Express server is running!");
});

app.get("/api/v1/videos/:videoName", (req, res) => {
  const videoName = path.basename(req.params.videoName);

  if (videoName !== req.params.videoName || !VIDEO_NAME_REGEX.test(videoName)) {
    return res.status(400).send("Invalid video name");
  }

  const videosDir = path.resolve(__dirname, "assets", "videos");
  const videoPath = path.resolve(videosDir, videoName);

  if (!videoPath.startsWith(videosDir + path.sep)) {
    return res.status(400).send("Invalid video path");
  }

  fs.stat(videoPath, (err, stats) => {
    if (err) {
      console.error("Video not found:", err);
      return res.status(404).send("Video not found");
    }

    const fileSize = stats.size;
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4",
        "Cache-Control": STATIC_ASSET_CACHE,
      };

      res.writeHead(206, headers);
      const videoStream = fs.createReadStream(videoPath, { start, end });
      videoStream.pipe(res);
    } else {
      const headers = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
        "Cache-Control": STATIC_ASSET_CACHE,
      };

      res.writeHead(200, headers);
      fs.createReadStream(videoPath).pipe(res);
    }
  });
});

// Email sending endpoint
app.post("/api/v1/send-email", async (req, res) => {
  const name = sanitizeText(req.body.name, 120);
  const email = sanitizeText(req.body.email, 160).toLowerCase();
  const date = sanitizeText(req.body.date, 40);
  const phone = sanitizeText(req.body.phone, 40);
  const participants = sanitizeText(req.body.participants, 40);
  const message = sanitizeText(req.body.message, 1500);
  const extraNote = sanitizeText(req.body.extraNote, 500);
  const validationError = validateEmailPayload({
    name,
    email,
    date,
    phone,
    message,
  });

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  let transporter;
  try {
    transporter = createMailTransporter();
  } catch (error) {
    logMailError("Email configuration error", error);
    return res.status(500).json({ error: "Email service is not configured" });
  }

  // Email options for admin
  let adminMailOptions = {
    from: EMAIL_FROM,
    to: ADMIN_EMAIL, // Send email to admin
    subject: "Nueva solicitud de reserva",
    text: `Nombre: ${name}\nEmail: ${email}\nFecha: ${date}\nTeléfono: ${phone}\nParticipantes: ${participants}\nDetalles: ${message}\nNota adicional: ${extraNote}`,
  };

  // Email options for user
  let userMailOptions = {
    from: EMAIL_FROM,
    to: email, // Send email to user
    subject: "Gracias por su solicitud de reserva",
    text: `Estimado/a ${name},\n\nGracias por su solicitud de reserva. Aquí están sus detalles:\n\nNombre: ${name}\nEmail: ${email}\nFecha: ${date}\nTeléfono: ${phone}\nParticipantes: ${participants}\nDetalles: ${message}\nNota adicional: ${extraNote}\n\nNos pondremos en contacto con usted en breve.\n\nSaludos cordiales,\nEquipo de Aiguaroca`,
  };

  try {
    // Send email to admin
    let adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully:", adminInfo.response);

    // Send email to user
    let userInfo = await transporter.sendMail(userMailOptions);
    console.log("User email sent successfully:", userInfo.response);

    res.status(200).json({
      message: "Emails sent successfully!",
      adminInfo: adminInfo.response,
      userInfo: userInfo.response,
    });
  } catch (error) {
    logMailError("Error sending booking emails", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

app.post("/api/v1/subscribe", async (req, res) => {
  const email = sanitizeText(req.body.email, 160).toLowerCase();
  const validationError = validateEmailPayload({ email });

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  let transporter;
  try {
    transporter = createMailTransporter();
  } catch (error) {
    logMailError("Email configuration error", error);
    return res.status(500).json({ error: "Email service is not configured" });
  }

  // Email options for admin
  let adminMailOptions = {
    from: EMAIL_FROM,
    to: ADMIN_EMAIL, // Send email to admin
    subject: "Nueva suscripción",
    text: `Un nuevo usuario se ha suscrito con el email: ${email}`,
  };

  // Email options for user
  let userMailOptions = {
    from: EMAIL_FROM,
    to: email, // Send email to the subscriber
    subject: "Subscription Confirmation",
    text: `Estimado/a,\n\nGracias por suscribirse a nuestro boletín. Estaremos en contacto con usted con las últimas noticias y actualizaciones.\n\nSaludos cordiales,\nEquipo de  Aiguaroca`,
  };

  try {
    // Send email to admin
    let adminInfo = await transporter.sendMail(adminMailOptions);
    console.log(
      "Admin subscription email sent successfully:",
      adminInfo.response
    );

    // Send email to user
    let userInfo = await transporter.sendMail(userMailOptions);
    console.log(
      "User subscription email sent successfully:",
      userInfo.response
    );

    res.status(200).json({
      message: "Subscription emails sent successfully!",
      adminInfo: adminInfo.response,
      userInfo: userInfo.response,
    });
  } catch (error) {
    logMailError("Error sending subscription emails", error);
    res.status(500).json({ error: "Failed to send subscription emails" });
  }
});

app.post("/api/v1/contact", async (req, res) => {
  const name = sanitizeText(req.body.name, 120);
  const email = sanitizeText(req.body.email, 160).toLowerCase();
  const phone = sanitizeText(req.body.phone, 40);
  const message = sanitizeText(req.body.message, 1500);
  const validationError = validateEmailPayload({ name, email, phone, message });

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  let transporter;
  try {
    transporter = createMailTransporter();
  } catch (error) {
    logMailError("Email configuration error", error);
    return res.status(500).json({ error: "Email service is not configured" });
  }

  // Email options for admin
  let adminMailOptions = {
    from: EMAIL_FROM,
    to: ADMIN_EMAIL, // Send email to admin
    subject: "Nuevo mensaje de contacto",
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  // Email options for user
  let userMailOptions = {
    from: EMAIL_FROM,
    to: email, // Send email to user
    subject: "Gracias por contactarnos",
    text: `Estimado/a ${name},\n\nGracias por contactarnos. Hemos recibido su mensaje y nos pondremos en contacto con usted en breve.\n\nSaludos cordiales,\nEquipo de Aiguaroca`,
  };

  try {
    // Send email to admin
    let adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin contact email sent successfully:", adminInfo.response);

    let userInfo = null;
    try {
      // Send email to user
      userInfo = await transporter.sendMail(userMailOptions);
      console.log("User contact email sent successfully:", userInfo.response);
    } catch (error) {
      logMailError("Error sending contact confirmation email", error);
    }

    res.status(200).json({
      message: "Contact emails sent successfully!",
      adminInfo: adminInfo.response,
      userInfo: userInfo?.response || null,
    });
  } catch (error) {
    logMailError("Error sending contact email", error);
    res.status(500).json({ error: "Failed to send contact emails" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
