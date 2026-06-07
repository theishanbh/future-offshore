import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Future Offshore - Offshore Engineering Excellence"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #150958 0%, #1a97d4 50%, #a6cd39 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 20,
        }}
      >
        Future Offshore
      </div>
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Innovate. Collaborate. Deliver.
      </div>
    </div>,
    { ...size },
  )
}
