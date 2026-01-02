import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetaWurks - AI-Powered Cloud Orchestration",
  description: "AI-powered insights for your business. Instantly analyze PDFs, spreadsheets, and more to answer domain-specific questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

