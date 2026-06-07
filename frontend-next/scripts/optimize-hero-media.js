const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ffmpeg = require("@ffmpeg-installer/ffmpeg").path;
const root = path.join(__dirname, "..", "..");
const videosDir = path.join(root, "Backend", "assets", "videos");
const assetsDir = path.join(root, "Backend", "assets");

const inputVideo = path.join(videosDir, "intro.mp4");
const outputVideo = path.join(videosDir, "intro-hq.mp4");
const outputPoster = path.join(assetsDir, "poster-hq.png");

if (!fs.existsSync(inputVideo)) {
  console.error("optimize-hero-media: intro.mp4 not found");
  process.exit(1);
}

function run(cmd) {
  console.log(">", cmd);
  execSync(cmd, { stdio: "inherit" });
}

console.log("Extracting 1080p poster frame...");
run(
  `"${ffmpeg}" -y -i "${inputVideo}" -ss 00:00:01 -vframes 1 -vf "scale=1920:1080:flags=lanczos" "${outputPoster}"`
);

console.log("Re-encoding hero video at higher quality...");
run(
  `"${ffmpeg}" -y -i "${inputVideo}" -c:v libx264 -crf 14 -preset slow -profile:v high -pix_fmt yuv420p -movflags +faststart -an "${outputVideo}"`
);

const backupVideo = path.join(videosDir, "intro-original.mp4");
if (!fs.existsSync(backupVideo)) {
  fs.copyFileSync(inputVideo, backupVideo);
  console.log("Backed up original to intro-original.mp4");
}

fs.copyFileSync(outputVideo, inputVideo);
console.log("Replaced intro.mp4 with high-quality encode");

const backupPoster = path.join(assetsDir, "poster-original.png");
if (!fs.existsSync(backupPoster) && fs.existsSync(path.join(assetsDir, "poster.png"))) {
  fs.copyFileSync(path.join(assetsDir, "poster.png"), backupPoster);
}

fs.copyFileSync(outputPoster, path.join(assetsDir, "poster.png"));
console.log("Replaced poster.png with 1920x1080 frame from video");
console.log("Done. Run npm run dev to sync assets.");
