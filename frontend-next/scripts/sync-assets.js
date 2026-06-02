const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "..", "Backend", "assets");
const target = path.join(__dirname, "..", "public", "api", "v1", "assets");

if (!fs.existsSync(source)) {
  console.warn("sync-assets: Backend/assets not found, skipping");
  process.exit(0);
}

const videosSource = path.join(source, "videos");
const videosTarget = path.join(__dirname, "..", "public", "api", "v1", "videos");

fs.mkdirSync(target, { recursive: true });
fs.cpSync(source, target, { recursive: true });

if (fs.existsSync(videosSource)) {
  fs.mkdirSync(videosTarget, { recursive: true });
  fs.cpSync(videosSource, videosTarget, { recursive: true });
  console.log("sync-assets: copied videos -> public/api/v1/videos");
}

console.log("sync-assets: copied Backend/assets -> public/api/v1/assets");
