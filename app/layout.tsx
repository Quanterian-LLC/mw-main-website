import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  // Without metadataBase, relative image paths resolve unpredictably for
  // external scrapers. LinkedIn requires absolute og:image URLs.
  metadataBase: new URL("https://metawurks.com"),
  title: "MetaWurks - AI-Powered Workflow Orchestration",
  description: "AI-powered insights for your business. Instantly analyze PDFs, spreadsheets, and more to answer domain-specific questions.",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
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

