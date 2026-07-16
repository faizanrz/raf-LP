import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/dubai-villas-for-sale/",
    "/buying-property-in-dubai-from-uk/",
    "/risks-of-buying-property-in-dubai/",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
}
