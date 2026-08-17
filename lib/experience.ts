export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  period: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: "exp-aivariant",
    role: "Business Analyst Intern",
    company: "Ai Variant",
    location: "Remote",
    locationType: "Remote",
    period: "Sep 2025 – Mar 2026",
    duration: "6 Months",
    description:
      "Gained practical experience in understanding business requirements, analyzing large business datasets, documenting processes, and supporting data-driven decision-making through analytical workflows in an Agile environment.",
    responsibilities: [
      "Gathered, analyzed, and documented business requirements by collaborating with 10+ stakeholders across multiple projects, ensuring clear and complete functional documentation.",
      "Analyzed and cleaned 8,000+ business records using Microsoft Excel and SQL, developed KPI reports and dashboards, and identified process improvement opportunities that supported data-driven decision-making.",
      "Prepared BRD (Business Requirements Document) documentation, tracked project milestones, and worked with cross-functional teams to support the successful delivery of 5+ business initiatives within scheduled timelines.",
      "Assisted in process mapping, workflow analysis, and dashboard design using Excel, Power BI, and Tableau to translate complex datasets into stakeholder-friendly reports.",
    ],
    technologies: [
      "Excel",
      "SQL",
      "Power BI",
      "Tableau",
      "Business Analysis",
      "Requirement Gathering",
      "BRD/FRD",
      "Agile",
    ],
  },
  {
    id: "exp-tvsmotor",
    role: "Sales Analyst Intern",
    company: "TVS Motor Company (Shri Shakthi Bikes)",
    location: "Chennai, Tamil Nadu",
    locationType: "On-site",
    period: "Nov 2024 – Dec 2024",
    duration: "2 Months",
    description:
      "Worked on sales performance and customer satisfaction analytics focused on understanding customer purchasing behavior and service quality in the automotive retail space.",
    responsibilities: [
      "Analyzed sales performance and customer data for 1,200+ customer records using Microsoft Excel to identify purchasing trends, seasonal demand shifts, and improve reporting accuracy.",
      "Created daily and weekly dashboards using Pivot Tables, Lookup functions (VLOOKUP, XLOOKUP), and dynamic charts to monitor sales KPIs, service performance, and inventory metrics.",
      "Maintained CRM records, coordinated with sales and service departments, and collected feedback from 250+ customers to generate insights that directly supported customer satisfaction and service quality improvements.",
      "Conducted statistical analysis on customer survey data to generate actionable recommendations for management on customer experience improvement.",
    ],
    technologies: [
      "Advanced Excel",
      "Power BI",
      "Business Analysis",
      "Customer Analytics",
      "Reporting & Visualization",
      "CRM Data Maintenance",
    ],
  },
];
