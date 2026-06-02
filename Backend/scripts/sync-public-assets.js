const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "assets");
const target = path.join(__dirname, "..", "public", "api", "v1", "assets");

if (!fs.existsSync(source)) {
  console.warn("sync-public-assets: no assets folder, skipping");
  process.exit(0);
}

fs.mkdirSync(target, { recursive: true });
fs.cpSync(source, target, { recursive: true });
console.log("sync-public-assets: copied assets to public/api/v1/assets");
