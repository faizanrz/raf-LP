import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import GoogleTag from "@/components/GoogleTag";
import LeadNudgeScript from "@/components/LeadNudgeScript";
import MetaPixel from "@/components/MetaPixel";
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
        {/* LeadNudge WhatsApp float, replaces the old hand-built widget.
            lazyOnload, same as GA/Meta, per the site-wide PSI rule. */}
        <Script src="https://raf.leadnudge.ae/api/widget/whatsapp" strategy="lazyOnload" />
        <GoogleTag />
        <MetaPixel />
      </body>
    </html>
  );
}
