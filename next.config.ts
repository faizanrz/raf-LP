import type { NextConfig } from "next";

// No `output: "export"`: the app deploys as a standard Next.js app on Vercel
// so the /api/lead route (Resend email notifications) can run server-side.
// All pages remain statically prerendered.
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dubai-villas-for-sale/",
        permanent: true,
      },
      {
        // All apartment and flat paid traffic now lands on one page.
        // Explicit 301 rather than `permanent: true`, which emits a 308.
        // The un-slashed form is normalised to this one first by
        // `trailingSlash`, so a single rule covers both.
        source: "/dubai-apartments-for-sale/",
        destination: "/apartments-for-sale-in-dubai/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
