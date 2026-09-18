import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Light Bazaar — Düsseldorf after dark",
  description:
    "Night Shopping, DJs, Food & Drinks in Düsseldorf. 17:00–00:00. Datum und Location folgen.",
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
