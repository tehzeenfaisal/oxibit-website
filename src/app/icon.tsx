import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 32, height: 32, borderRadius: 7, overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 16 }}>
          <div style={{ display: "flex", width: 16, height: 16, background: "#0066FF" }} />
          <div style={{ display: "flex", width: 16, height: 16, background: "#FF5500" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 16 }}>
          <div style={{ display: "flex", width: 16, height: 16, background: "#fff" }} />
          <div style={{ display: "flex", width: 16, height: 16, background: "#47CFEB" }} />
        </div>
      </div>
    ),
    size,
  );
}
