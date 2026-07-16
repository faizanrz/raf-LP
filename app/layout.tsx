import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import LeadNudgeScript from "@/components/LeadNudgeScript";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RAF Real Estate",
  description: "Dubai property for UK buyers.",
  openGraph: {
    siteName: "RAF Real Estate",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <LeadNudgeScript />
      </body>
    </html>
  );
}
