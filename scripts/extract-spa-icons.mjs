import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.join("public", "spa-icons", "Comp_spa-01.jpg");
const OUT = path.join("public", "spa-icons", "png");

const GRID = { left: 100, top: 600, width: 1467, height: 1068 };
const COLS = 5;
const ROWS = 4;

const ICONS = [
  "yoga",
  "bottles",
  "massage",
  "teapot",
  "jar-flowers",
  "candles",
  "bath",
  "candle-stone",
  "incense",
  "towels",
  "leaves",
  "oil-burner",
  "water-drop",
  "lotus",
  "citrus",
  "mortar",
  "bamboo",
  "face-mask",
  "pump-bottle",
  "zen-stones",
];

function backgroundAlpha(r, g, b) {
  const dr = 255 - r;
  const dg = 243 - g;
  const db = 235 - b;
  const distance = Math.sqrt(dr * dr + dg * dg + db * db);

  if (distance < 28) return 0;
  if (distance < 52) return Math.round(((distance - 28) / 24) * 255);
  return 255;
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const cellW = Math.floor(GRID.width / COLS);
  const cellH = Math.floor(GRID.height / ROWS);
  const pad = Math.floor(Math.min(cellW, cellH) * 0.1);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const index = row * COLS + col;
      const name = ICONS[index];
      const left = GRID.left + col * cellW + pad;
      const top = GRID.top + row * cellH + pad;
      const w = cellW - pad * 2;
      const h = cellH - pad * 2;

      const { data, info } = await sharp(SRC)
        .extract({ left, top, width: w, height: h })
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
  }

  console.log(`Extracted ${ICONS.length} icons to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
