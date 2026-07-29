import { ImageResponse } from "next/og";
import { OgImage, ogImageSize, ogImageContentType } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Oxibit Technologies Services";

export default function Image() {
  return new ImageResponse(<OgImage eyebrow="Services" title="One partner for the full life of your software." />, size);
}
