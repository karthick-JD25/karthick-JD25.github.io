import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | Karthick Raj`,
  },
  description: SITE_METADATA.description,
  keywords: [
    "Business Analyst",
    "Data Analyst",
    "Power BI Developer",
    "Tableau Developer",
    "Data Storyteller",
    "Business Intelligence",
    "Excel Dashboard Automation",
    "Karthick Raj",
    "Karthick Raj Chennai",
  ],
  authors: [{ name: SITE_METADATA.author, url: SITE_METADATA.linkedin }],
  creator: SITE_METADATA.author,
  metadataBase: new URL(SITE_METADATA.github),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.github,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "Karthick Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-brand-bg text-white font-sans antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

