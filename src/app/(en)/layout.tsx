import { RootLayout, buildMetadata } from "@/components/root-layout";

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="en">{children}</RootLayout>;
}
