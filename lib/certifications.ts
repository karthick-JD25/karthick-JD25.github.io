export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  category: "Business Analysis" | "Data Analysis" | "Database" | "Visualization" | "AI & Productivity" | "AI & Data Analytics" | "Data Analytics" | "Business Intelligence" | "Internship";
  date: string;
  imagePath?: string;
  featured: boolean;
  credentialUrl?: string;
}

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  // ━━━━━━━━━━━━━━━━━━━━
  // FEATURED CERTIFICATES (5)
  // ━━━━━━━━━━━━━━━━━━━━
  {
    id: "cert-pl300",
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    provider: "Microsoft Learn",
    category: "Data Analysis",
    date: "July 30, 2026",
    imagePath: "/images/cert_microsoft.png",
    featured: true,
    credentialUrl: "https://learn.microsoft.com/en-us/users/karthickraj-5684/credentials/certification/data-analyst-associate",
  },
  {
    id: "cert-nasscom",
    title: "NASSCOM Business Analyst — Gold Category (92%)",
    provider: "NASSCOM & Ministry of Electronics & IT, India",
    category: "Business Analysis",
    date: "Mar 11, 2026",
    imagePath: "/images/cert_nasscom.png",
    featured: true,
  },
  {
    id: "cert-excelr",
    title: "ExcelR Business Analyst Certification Program (with Distinction)",
    provider: "ExcelR EdTech",
    category: "Business Analysis",
    date: "Jan 6, 2026",
    imagePath: "/images/cert_excelr.png",
    featured: true,
  },
  {
    id: "cert-aivariant",
    title: "Business Analyst Internship Certificate",
    provider: "Ai Variant",
    category: "Internship",
    date: "Apr 1, 2026",
    imagePath: "/images/cert_aivariant.png",
    featured: true,
  },
  {
    id: "cert-tvs-intern",
    title: "Sales Analyst Internship Certificate",
    provider: "Shri Shakthi Bikes Private Limited (TVS)",
    category: "Internship",
    date: "05/12/2024 – 31/12/2024",
    imagePath: "/images/cert_tvs_intern.png",
    featured: true,
  },

  // ━━━━━━━━━━━━━━━━━━━━
  // CERTIFICATES (6)
  // ━━━━━━━━━━━━━━━━━━━━
  {
    id: "cert-google-ai",
    title: "Google AI Essentials",
    provider: "Google (Coursera)",
    category: "AI & Productivity",
    date: "May 28, 2026",
    imagePath: "/images/cert_google_ai.png",
    featured: false,
  },
  {
    id: "cert-nasscom-bi",
    title: "NASSCOM Business Intelligence Analyst — 73.33%",
    provider: "NASSCOM & Ministry of Electronics & IT, India",
    category: "Business Intelligence",
    date: "10/08/2026",
    imagePath: "/images/cert_nasscom_bi.png",
    featured: false,
  },
  {
    id: "cert-google-prompt",
    title: "Google Prompting Essentials",
    provider: "Google (Coursera)",
    category: "AI & Productivity",
    date: "May 29, 2026",
    imagePath: "/images/cert_google_prompt.png",
    featured: false,
  },
  {
    id: "cert-tata-genai",
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    provider: "Tata Group (Forage)",
    category: "AI & Data Analytics",
    date: "January 3rd, 2026",
    imagePath: "/images/cert_tata.png",
    featured: false,
  },
  {
    id: "cert-deloitte",
    title: "Deloitte Data Analytics Job Simulation",
    provider: "Deloitte (Forage)",
    category: "Data Analytics",
    date: "February 10th, 2026",
    imagePath: "/images/cert_deloitte.png",
    featured: false,
  },
  {
    id: "cert-forage-vis",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    provider: "Tata Group & Forage",
    category: "Visualization",
    date: "April 20th, 2026",
    imagePath: "/images/cert_forage_vis.png",
    featured: false,
  },
];
