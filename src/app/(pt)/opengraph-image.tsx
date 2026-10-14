import { ogSize, renderOgImage } from "@/components/og-image";

export const alt = "Davi Machado — Desenvolvedor web";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("pt");
}
