import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Light Bazaar — Night Vintage & Lifestyle Market Düsseldorf",
  description:
    "Kuratierter Night Vintage & Lifestyle Market in Düsseldorf mit Vintage Fashion, Streetwear, Sneakers, Design, Art, DJ-Sets, Food & Drinks.",
  icons: {
    icon: "/brand-mark.svg",
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
