import { ImageResponse } from "next/og";

export const alt = "Serenity Source — Readings, Counseling & Clearings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <ellipse cx="16" cy="23.2" rx="9.2" ry="3.4" fill="#BC9AF4" stroke="#053275" stroke-width="1.15"/>
  <ellipse cx="16" cy="18.6" rx="7.4" ry="2.9" fill="#D2DCFD" stroke="#053275" stroke-width="1.15"/>
  <ellipse cx="16" cy="14.4" rx="5.8" ry="2.4" fill="#FFFFFF" stroke="#053275" stroke-width="1.15"/>
  <path d="M16 8.2c-2.1 0-3.8 1.45-3.8 3.25 0 1.05.55 1.95 1.45 2.55l2.35 1.55 2.35-1.55c.9-.6 1.45-1.5 1.45-2.55 0-1.8-1.7-3.25-3.8-3.25Z" fill="#FD7DA0" stroke="#053275" stroke-width="1.05" stroke-linejoin="round"/>
  <path d="M16 6.8v4.2M13.1 8.9h5.8" stroke="#33CCCC" stroke-width=".85" stroke-linecap="round"/>
</svg>`;

export default async function OpenGraphImage() {
  const [cormorant, dmSans] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuViSqaTK069tL.woff",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlzuA.woff",
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 72px",
          background:
            "linear-gradient(135deg, #faf8f4 0%, #f5f9f6 48%, #eef4f0 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: 120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(122, 157, 140, 0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(197, 217, 206, 0.35) 0%, transparent 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 680,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3d6b58",
              marginBottom: 18,
            }}
          >
            Serenity Source
          </div>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 72,
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#24302b",
              marginBottom: 24,
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
              maxWidth: 560,
            }}
          >
            Readings · Counseling · Clearings · Ceremony
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                height: 1,
                width: 56,
                background: "#c5d0c9",
              }}
            />
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 22,
                color: "#3d6b58",
              }}
            >
              myserenitysource.com
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 280,
            height: 280,
            borderRadius: 40,
            background: "rgba(255, 255, 255, 0.72)",
            border: "1px solid #c5d0c9",
            boxShadow: "0 24px 64px rgba(74, 124, 104, 0.12)",
            zIndex: 1,
          }}
        >
          <img
            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`}
            width={210}
            height={210}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant",
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
