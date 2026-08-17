export const dynamic = "force-static";
export const revalidate = 0;
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: "https://github.com/karthick-JD25/sitemap.xml",
  };
}
