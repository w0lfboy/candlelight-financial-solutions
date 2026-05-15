import { ImageResponse } from "next/og";

export const alt =
  "Candlelight Financial Solutions — Bringing Your Full Financial Picture to Light";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #091f2c 0%, #0c2d3d 50%, #133d50 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Flame icon */}
        <svg width="64" height="84" viewBox="0 0 32 52" fill="none">
          <path
            d="M16 2C16 2 5 16 5 28C5 34.075 9.925 39 16 39C22.075 39 27 34.075 27 28C27 16 16 2 16 2Z"
            fill="#4ec5d4"
          />
          <path
            d="M16 12C16 12 10 21 10 28C10 31.314 12.686 34 16 34C19.314 34 22 31.314 22 28C22 21 16 12 16 12Z"
            fill="white"
            opacity="0.35"
          />
        </svg>

        <div
          style={{
            marginTop: 32,
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Candlelight Financial Solutions
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 24,
            color: "#4ec5d4",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
          }}
        >
          Independent Financial Planning & Wealth Management
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Fiduciary advice. Personalized strategy. Your best interest, always.
        </div>
      </div>
    ),
    { ...size }
  );
}
