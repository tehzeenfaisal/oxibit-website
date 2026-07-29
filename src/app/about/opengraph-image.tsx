import { ImageResponse } from "next/og";
import { OgImage, ogImageSize, ogImageContentType } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "About Oxibit Technologies";

export default function Image() {
  return new ImageResponse(
    <OgImage eyebrow="About Oxibit" title="We make IT happen, and we stay to keep it happening." />,
    size,
  );
}
