import { RootLayout, buildMetadata } from "@/components/root-layout";

export const metadata = buildMetadata("pt");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="pt">{children}</RootLayout>;
}
