import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// Headings font — exposed as the CSS variable used in tailwind.config.ts (font-heading)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Body font — exposed as the CSS variable used in tailwind.config.ts (font-body)
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakhtawar Abbasi",
  description:
    "Portfolio of Bakhtawar Abbasi, a full stack developer, digital marketer and graphic designer.",
};

// Colours the browser bar on mobile to match the site
export const viewport: Viewport = {
  themeColor: "#0A2428",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable} font-body antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}