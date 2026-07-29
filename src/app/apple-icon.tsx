import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#21252C",
        }}
      >
        <div style={{ display: "flex", width: 92, height: 92, borderRadius: 18, overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 46 }}>
            <div style={{ display: "flex", width: 46, height: 46, background: "#0066FF" }} />
            <div style={{ display: "flex", width: 46, height: 46, background: "#FF5500" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 46 }}>
            <div style={{ display: "flex", width: 46, height: 46, background: "#fff" }} />
            <div style={{ display: "flex", width: 46, height: 46, background: "#47CFEB" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
