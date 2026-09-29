import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = { themeColor: "#050505" };

export const metadata: Metadata = {
  metadataBase: new URL("https://nightlightbazaar.de"),
  title: "Night Light Bazaar — Night Vintage & Lifestyle Market Düsseldorf",
  description:
    "Kuratierter Night Vintage & Lifestyle Market in Düsseldorf mit Vintage Fashion, Streetwear, Sneakers, Design, Art, DJ-Sets, Food & Drinks.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }],
    apple: "/brand-mark.svg",
  },
  openGraph: {
    title: "Night Light Bazaar — Düsseldorf After Dark",
    description: "Vintage, Streetwear, Sneakers, Musik, Food & Drinks — als moderner Night Market in Düsseldorf.",
    url: "https://nightlightbazaar.de/",
    siteName: "Night Light Bazaar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Night Light Bazaar",
    description: "Night Vintage & Lifestyle Market in Düsseldorf.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
