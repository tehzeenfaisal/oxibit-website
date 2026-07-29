import { ImageResponse } from "next/og";
import { OgImage, ogImageSize, ogImageContentType } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Contact Oxibit Technologies";

export default function Image() {
  return new ImageResponse(<OgImage eyebrow="Contact" title="Let's talk about your project." />, size);
}
