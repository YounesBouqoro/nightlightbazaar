import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Light Bazaar — Night Vintage & Lifestyle Market Düsseldorf",
  description:
    "Kuratierter Night Vintage & Lifestyle Market in Düsseldorf mit Vintage Fashion, Streetwear, Sneakers, Design, Art, DJ-Sets, Food & Drinks.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Night Light Bazaar — Düsseldorf After Dark",
    description: "Vintage, Streetwear, Sneakers, Musik, Food & Drinks — als moderner Night Market in Düsseldorf.",
    url: "https://nightlightbazaar.de/",
    siteName: "Night Light Bazaar",
    images: ["/favicon.png"],
    type: "website",
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
