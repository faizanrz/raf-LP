import type { NextConfig } from "next";

// No `output: "export"`: the app deploys as a standard Next.js app on Vercel
// so the /api/lead route (Resend email notifications) can run server-side.
// All pages remain statically prerendered.
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
