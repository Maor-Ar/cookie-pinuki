import type { Metadata, Viewport } from "next";
import { Document } from "@/components/Document";
import { createMetadata, siteViewport } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("he");
export const viewport: Viewport = siteViewport;

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Document locale="he">{children}</Document>;
}
