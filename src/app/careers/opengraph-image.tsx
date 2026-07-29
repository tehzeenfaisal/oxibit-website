import { ImageResponse } from "next/og";
import { OgImage, ogImageSize, ogImageContentType } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Careers at Oxibit Technologies";

export default function Image() {
  return new ImageResponse(<OgImage eyebrow="Careers" title="Build software that people rely on for years." />, size);
}
