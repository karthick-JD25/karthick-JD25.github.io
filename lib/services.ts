export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  icon: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "serv-ba",
    title: "Business Analysis",
    subtitle: "Aligning operations with strategic goals.",
    bullets: [
      "Requirement Gathering & BRD/FRD Documentation",
      "As-Is and To-Be Process Mapping & Gap Analysis",
      "Stakeholder Management & User Story Definition",
      "Agile/Scrum Workflow Facilitation",
    ],
    icon: "Briefcase",
  },
  {
    id: "serv-da",
    title: "Data Analysis & Insights",
    subtitle: "Turning raw variables into intelligence.",
    bullets: [
      "Data Cleaning, Validation & ETL Workflows",
      "SQL Query Construction (aggregations, joins, filtering)",
      "Trend Identification & Exploratory Data Analysis (EDA)",
      "Actionable Recommendations for Operations",
    ],
    icon: "BarChart3",
  },
  {
    id: "serv-powerbi",
    title: "Power BI Development",
    subtitle: "Constructing advanced BI control panels.",
    bullets: [
      "End-to-End Star Schema Data Modeling",
      "Complex DAX Metric & Measure Formulations",
      "Executive KPI Summaries & Drill-Through Sub-Pages",
      "Automated Incremental Refresh Configurations",
    ],
    icon: "BarChart",
  },
  {
    id: "serv-excel",
    title: "Excel Dashboard Automation",
    subtitle: "Maximizing legacy systems productivity.",
    bullets: [
      "Dynamic Pivot Tables & Advanced Formulas (XLOOKUP, INDEX/MATCH)",
      "Power Query Automation to clean raw CSV/TXT logs",
      "Interactive Sales & Financial Dashboards",
      "VBA/Macro automation for reporting cycles",
    ],
    icon: "FileSpreadsheet",
  },
  {
    id: "serv-bi",
    title: "Business Intelligence Consulting",
    subtitle: "Visual storytelling for leadership decisions.",
    bullets: [
      "Organizational KPI Definition & Goal Alignment",
      "C-Suite Level Performance Presentation Decks",
      "Root Cause Analysis & Operational Performance Audits",
      "Strategic Business Decision Support Analysis",
    ],
    icon: "LineChart",
  },
  {
    id: "serv-ai",
    title: "AI-Assisted Productivity",
    subtitle: "Supercharging delivery speeds with AI.",
    bullets: [
      "Custom Generative AI Prompts for Data Extraction",
      "AI-driven Report Outlines & Presentation Drafting",
      "Automation of repetitive Excel / SQL writing tasks",
      "Integrating Gemini/Claude/ChatGPT into analytics pipelines",
    ],
    icon: "Cpu",
  },
];
