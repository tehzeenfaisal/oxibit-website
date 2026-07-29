import { readFileSync } from "fs";
import { join } from "path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/logos/oxibit-logo-white.png"),
).toString("base64")}`;

interface OgImageProps {
  eyebrow: string;
  title: string;
}

/** Shared JSX tree rendered into a PNG by every route's opengraph-image.tsx via next/og's ImageResponse. */
export function OgImage({ eyebrow, title }: OgImageProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: "#21252C",
        backgroundImage:
          "radial-gradient(circle at 88% 8%, rgba(120,170,255,0.20) 0%, rgba(120,170,255,0) 55%), radial-gradient(circle at 6% 92%, rgba(71,207,235,0.16) 0%, rgba(71,207,235,0) 55%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- next/og's ImageResponse (Satori) only renders plain <img>, not next/image */}
      <img src={logoSrc} alt="" width={157} height={40} style={{ display: "flex" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#5C9BFF" }}>
          {eyebrow}
        </span>
        <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5, color: "#fff" }}>{title}</span>
      </div>

      <span style={{ fontSize: 20, color: "#8C97A3" }}>oxibit.com</span>
    </div>
  );
}
