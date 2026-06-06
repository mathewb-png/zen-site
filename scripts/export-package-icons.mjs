import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.join("public", "spa-icons", "Comp_spa-01.jpg");
const OUT = path.join("public", "spa-icons", "packages");

const CELL_W = 293;
const CELL_H = 268;
const PAD = 26;
const BASE_LEFT = 100;
const BASE_TOP = 600;

const PACKAGES = [
  { name: "sessions", row: 0, col: 2 },
  { name: "special", row: 1, col: 2, heightScale: 0.58 },
  { name: "readings", row: 0, col: 3 },
  { name: "guidance", row: 0, col: 0, insetLeft: 36 },
  { name: "clearings", row: 1, col: 3, heightScale: 0.62 },
  { name: "ceremony", row: 2, col: 1 },
];

function backgroundAlpha(r, g, b) {
  const dr = 255 - r;
  const dg = 243 - g;
  const db = 235 - b;
  const distance = Math.sqrt(dr * dr + dg * dg + db * db);

  if (distance < 30) return 0;
  if (distance < 55) return Math.round(((distance - 30) / 25) * 255);
  return 255;
}

async function exportIcon({
  name,
  row,
  col,
  heightScale = 1,
  insetLeft = 0,
}) {
  const left = BASE_LEFT + col * CELL_W + PAD + insetLeft;
  const top = BASE_TOP + row * CELL_H + PAD;
  const width = CELL_W - PAD * 2 - insetLeft;
  const height = Math.round((CELL_H - PAD * 2) * heightScale);

  const { data, info } = await sharp(SRC)
    .extract({ left, top, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const alpha = backgroundAlpha(data[i], data[i + 1], data[i + 2]);
    data[i + 3] = Math.min(data[i + 3], alpha);
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()
    .png()
    .toFile(path.join(OUT, `${name}.png`));
}

async function main() {
  await mkdir(OUT, { recursive: true });

  for (const icon of PACKAGES) {
    await exportIcon(icon);
  }

  console.log(`Exported ${PACKAGES.length} package icons to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
