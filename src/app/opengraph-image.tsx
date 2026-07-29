import { ImageResponse } from "next/og";
import { OgImage, ogImageSize, ogImageContentType } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Oxibit Technologies — We Make IT Happen.";

export default function Image() {
  return new ImageResponse(
    <OgImage eyebrow="Enterprise software partner" title="Software built around your business, and supported long after launch." />,
    size,
  );
}
