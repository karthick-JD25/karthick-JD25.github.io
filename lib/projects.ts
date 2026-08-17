export interface ProjectItem {
  id: string;
  title: string;
  category: "Excel" | "Power BI" | "Tableau" | "SQL";
  githubUrl: string;
  imagePath: string;
  businessProblem: string;
  features: string[];
  businessImpact: string;
  technologies: string[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-customer-insights",
    title: "Customer Insights & Revenue Analysis",
    category: "Power BI",
    githubUrl: "https://github.com/karthick-JD25/customer-insights-revenue-analysis-powerbi",
    imagePath: "/images/project_customer_insights.png",
    businessProblem:
      "Analyze crowdfunding projects data (backers, funding goals, and success rates) to determine what drives campaign completion and identify key revenue channels.",
    features: [
      "Customer Segmentation by outcomes and categories",
      "Goal Range Analysis to identify optimal project sizes",
      "Top 5 Backers and Top 5 Amount Raised tracking",
      "Geographic visualization of campaigns across the globe",
      "Yearly trend line showing successful vs failed launches",
    ],
    businessImpact:
      "Empowers stakeholders to make data-driven investment decisions on which campaigns to back or launch based on historical success models.",
    technologies: ["Power BI", "SQL", "Data Modeling", "Customer Analytics"],
  },
  {
    id: "proj-zomato-excel",
    title: "Zomato Business Analysis Dashboard",
    category: "Excel",
    githubUrl: "https://github.com/karthick-JD25/Zomato-business-analysis-Excel-dashboard",
    imagePath: "/images/project_zomato_excel.png",
    businessProblem:
      "Track restaurant distributions, opening trends, customer bookings, ratings, and deliveries to discover opportunities for operational efficiency and revenue expansion.",
    features: [
      "Key performance metrics: Total Restaurants, Bookings %, Ratings",
      "Interactive country and city slicers (15 countries, 141 cities)",
      "Top 10 city-wise restaurant counts and cuisine popularity",
      "Yearly and monthly restaurant opening trend line charts",
      "Average ratings distributions and cuisine demand matrix",
    ],
    businessImpact:
      "Allows the management team to identify high-potential cities and cuisines to optimize merchant acquisition strategies.",
    technologies: ["Advanced Excel", "Pivot Tables", "Power Query", "Data Visualization"],
  },
  {
    id: "proj-zomato-tableau",
    title: "Zomato Cuisine Analysis (Dark Dashboard)",
    category: "Tableau",
    githubUrl: "https://github.com/karthick-JD25/restaurant-cuisine-analysis-tableau",
    imagePath: "/images/project_zomato_tableau.png",
    businessProblem:
      "Analyze restaurant ratings and geographic distributions to determine customer preference hotspots and market saturation.",
    features: [
      "Stunning high-contrast dark dashboard styling",
      "Total restaurants (9,551) and cuisine categories (1,825) trackers",
      "Online delivery performance donut chart indicating distribution split",
      "Interactive slicers by Year, Quarter, and Month",
      "Cuisine popularity analysis for menu alignment",
    ],
    businessImpact:
      "Assists culinary brands in conducting market research before setting up new restaurant locations or shifting menu directions.",
    technologies: ["Tableau Desktop", "Geographic Analysis", "Market Mapping", "Data Storytelling"],
  },
  {
    id: "proj-zomato-powerbi",
    title: "Zomato Performance Dashboard (Light Theme)",
    category: "Power BI",
    githubUrl: "https://github.com/karthick-JD25/restaurant-performance-dashboard-powerbi",
    imagePath: "/images/project_zomato_powerbi.png",
    businessProblem:
      "Evaluate pricing buckets, growth trends, online bookings, and customer distributions using custom DAX parameters.",
    features: [
      "Executive summaries: Total Restaurants, Ratings, Online Delivery %, Table Booking %",
      "Detailed geographic map showing restaurant distribution by continent",
      "Price Distribution pie chart divided by price buckets",
      "Interactive Country, City, and Year filters",
      "Growth Trend charts showing historical additions",
    ],
    businessImpact:
      "Acts as a dashboard control center for operations teams to spot service availability gaps (e.g., low delivery coverage areas).",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    id: "proj-financial-excel",
    title: "Financial Performance Analysis",
    category: "Excel",
    githubUrl: "https://github.com/karthick-JD25/financial-performance-analysis-excel-dashboard",
    imagePath: "/images/project_financial_excel.png",
    businessProblem:
      "Synthesize large financial transactional logs (8,500+ records) to track total funds raised, total backers, and average project lifespan.",
    features: [
      "Overview KPIs: Total Amount Raised, Total Backers, Avg Success Days",
      "Yearly, quarterly, and monthly slicers for granular financial drilling",
      "Distribution charts mapping campaigns by category and target success rates",
      "Bar charts illustrating top categories by backing counts and capital raised",
      "Outcome summaries comparing successful, canceled, and suspended states",
    ],
    businessImpact:
      "Provides finance managers with clean, visual summaries of capital allocation and return performance across project categories.",
    technologies: ["Microsoft Excel", "Financial Modeling", "Pivot Charts", "KPI Reporting"],
  },
  {
    id: "proj-crowdfunding",
    title: "Crowdfunding Campaign Analysis",
    category: "Tableau",
    githubUrl: "https://github.com/karthick-JD25/crowdfunding-campaign-analysis-tableau",
    imagePath: "/images/project_crowdfunding.png",
    businessProblem:
      "Examine funding outcomes (success, failure, cancellation) across global campaigns to predict success rates for prospective campaigns.",
    features: [
      "Interactive Tableau dashboard mapping global fundraising campaigns",
      "Funding outcomes analysis by category (Product Design, Tabletop Games, etc.)",
      "Total Amount Raised and total campaign count metrics",
      "Average campaign lifespans and timeline success tracking",
      "Interactive filters mapping campaigns to coordinate dimensions",
    ],
    businessImpact:
      "Helps advisors and creators structure crowdfunding campaigns by setting optimized goals, duration, and targeting categories.",
    technologies: ["Tableau Public", "SQL Joins", "Data Cleaning", "Trend Mapping"],
  },
];
