import { ogSize, renderOgImage } from "@/components/og-image";

export const alt = "Davi Machado — Web developer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
