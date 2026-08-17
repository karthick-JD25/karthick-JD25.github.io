export const dynamic = "force-static";
export const revalidate = 0;
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karthick Raj Portfolio",
    short_name: "Karthick Raj",
    description: "Premium Business Analyst & Data Analyst Portfolio Website",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1120",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
