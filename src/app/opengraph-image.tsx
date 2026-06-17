import { ImageResponse } from "next/og";

export const alt =
  "Serenity Source — spiritual readings, counseling, and clearings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(font: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((res) => res.text());

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  )?.[1];

  if (!resource) {
    throw new Error(`Failed to load font data for ${font}`);
  }

  return fetch(resource).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [cormorant, dmSans] = await Promise.all([
    loadGoogleFont("Cormorant+Garamond", 400),
    loadGoogleFont("DM+Sans", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #faf8f4 0%, #f5f9f6 48%, #eef4f0 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 0%, rgba(122, 157, 140, 0.18), transparent 58%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background:
              "linear-gradient(180deg, transparent, rgba(197, 217, 206, 0.35))",
          }}
        />

        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: "56px 72px",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 720,
              gap: 18,
            }}
          >
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 18,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#3d6b58",
              }}
            >
              Serenity Source
            </div>
            <div
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 72,
                lineHeight: 1.05,
                color: "#24302b",
                letterSpacing: "-0.02em",
              }}
            >
              Clarity, guidance & spiritual care
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 28,
                lineHeight: 1.45,
                color: "#4a5c54",
                maxWidth: 620,
              }}
            >
              Tarot and oracle readings, spiritual counseling, energy clearings,
              and wedding officiation.
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: 18,
                  color: "#3d6b58",
                  border: "1px solid #c5d0c9",
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                Readings
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: 18,
                  color: "#3d6b58",
                  border: "1px solid #c5d0c9",
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                Counseling
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: 18,
                  color: "#3d6b58",
                  border: "1px solid #c5d0c9",
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                Clearings
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <svg
              width="220"
              height="220"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="7" fill="#FAF8F4" />
              <ellipse
                cx="16"
                cy="23.2"
                rx="9.2"
                ry="3.4"
                fill="#BC9AF4"
                stroke="#053275"
                strokeWidth="1.15"
              />
              <ellipse
                cx="16"
                cy="18.6"
                rx="7.4"
                ry="2.9"
                fill="#D2DCFD"
                stroke="#053275"
                strokeWidth="1.15"
              />
              <ellipse
                cx="16"
                cy="14.4"
                rx="5.8"
                ry="2.4"
                fill="#FFFFFF"
                stroke="#053275"
                strokeWidth="1.15"
              />
              <path
                d="M16 8.2c-2.1 0-3.8 1.45-3.8 3.25 0 1.05.55 1.95 1.45 2.55l2.35 1.55 2.35-1.55c.9-.6 1.45-1.5 1.45-2.55 0-1.8-1.7-3.25-3.8-3.25Z"
                fill="#FD7DA0"
                stroke="#053275"
                strokeWidth="1.05"
                strokeLinejoin="round"
              />
              <path
                d="M16 6.8v4.2M13.1 8.9h5.8"
                stroke="#33CCCC"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 34,
                color: "#24302b",
              }}
            >
              myserenitysource.com
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#3d6b58",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: cormorant,
          style: "normal",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: dmSans,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
