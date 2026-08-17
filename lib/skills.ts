export interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Business Analysis",
    icon: "Briefcase",
    description: "Bridging the gap between business needs and technical solutions.",
    skills: [
      "Requirement Gathering",
      "Business Process Analysis",
      "BRD (Business Requirements Document)",
      "FRD (Functional Requirements Document)",
      "User Stories",
      "Gap Analysis",
      "Agile & Scrum Methodology",
      "Stakeholder Management",
      "Workflow Analysis",
      "KPI Definition",
    ],
  },
  {
    title: "Data Analytics",
    icon: "BarChart3",
    description: "Wrangling, querying, and analyzing data to discover trends.",
    skills: [
      "Advanced Excel",
      "SQL (PostgreSQL / MySQL)",
      "Power BI Development",
      "Tableau Desktop",
      "Python Data Science",
      "Power Query ETL",
      "DAX Formulas",
      "Data Cleaning & Validation",
      "Data Modeling",
      "Statistical Analysis",
    ],
  },
  {
    title: "Business Intelligence",
    icon: "LineChart",
    description: "Designing dashboards and metrics that guide leadership decisions.",
    skills: [
      "Dashboard Development",
      "Executive Reporting",
      "Interactive Dashboards",
      "Business Metrics Design",
      "Data Storytelling",
      "Trend Analysis",
      "Root Cause Analysis",
      "Decision Support",
      "Visual Best Practices",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    description: "The software and platforms utilized for day-to-day operations.",
    skills: [
      "Microsoft Excel",
      "Power BI Desktop",
      "Tableau Public",
      "MySQL Workbench",
      "Git & GitHub",
      "Jira Software",
      "Notion Workspace",
      "VS Code",
      "Google Workspace",
      "Microsoft Office 365",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: "Cpu",
    description: "Leveraging generative AI and prompt design to supercharge analytical speed.",
    skills: [
      "ChatGPT Integration",
      "Claude",
      "Gemini",
      "Microsoft Copilot",
      "AI Prompt Engineering",
      "AI Productivity Workflows",
      "Data Analysis AI Assistant",
      "Business Reporting Automation",
    ],
  },
];

export const PERSONAL_STRENGTHS = [
  "Analytical Thinking",
  "Business Analysis",
  "Data Visualization",
  "Stakeholder Collaboration",
  "SQL",
  "Power BI",
  "Tableau",
  "Excel",
  "Python",
  "Communication",
  "Problem Solving",
  "Critical Thinking",
  "AI Productivity",
  "Requirement Gathering",
];
