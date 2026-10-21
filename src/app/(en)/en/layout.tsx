import type { Metadata, Viewport } from "next";
import { Document } from "@/components/Document";
import { createMetadata, siteViewport } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("en");
export const viewport: Viewport = siteViewport;

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Document locale="en">{children}</Document>;
}
