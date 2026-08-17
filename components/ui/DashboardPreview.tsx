"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Database, 
  Cpu, 
  BarChart3, 
  PieChart, 
  Layers, 
  FileSpreadsheet, 
  Zap 
} from "lucide-react";
import Card from "./Card";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"sales" | "growth" | "satisfaction">("sales");
  const [dataPoints, setDataPoints] = useState<number[]>([30, 45, 35, 60, 55, 80, 95]);

  useEffect(() => {
    // Generate new random data points based on activeTab to simulate real-time metrics
    let newPoints = [30, 45, 35, 60, 55, 80, 95];
    if (activeTab === "growth") {
      newPoints = [10, 25, 45, 30, 70, 85, 110];
    } else if (activeTab === "satisfaction") {
      newPoints = [85, 88, 90, 89, 92, 95, 98];
    }
    setDataPoints(newPoints);
  }, [activeTab]);

  // SVG dimensions for the chart
  const width = 500;
  const height = 180;
  const padding = 20;

  // Generate SVG path for the line chart
  const getSvgPath = () => {
    if (dataPoints.length === 0) return "";
    const xStep = (width - padding * 2) / (dataPoints.length - 1);
    const maxVal = Math.max(...dataPoints, 10);
    const minVal = 0;
    const yRange = maxVal - minVal;

    return dataPoints
      .map((val, index) => {
        const x = padding + index * xStep;
        const y = height - padding - ((val - minVal) / yRange) * (height - padding * 2);
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  // Generate SVG gradient path area (filled underneath the line)
  const getGradientPath = () => {
    const linePath = getSvgPath();
    if (!linePath) return "";
    const xStep = (width - padding * 2) / (dataPoints.length - 1);
    const lastX = padding + (dataPoints.length - 1) * xStep;
    return `${linePath} L ${lastX} ${height - padding} L ${padding} ${height - padding} Z`;
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl bg-brand-bg/40 border border-brand-border/60 shadow-2xl p-6 backdrop-blur-md overflow-hidden group select-none">
      {/* Decorative inner mesh glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dashboard Top Header */}
      <div className="flex items-center justify-between border-b border-brand-border/40 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-brand-danger/80" />
            <span className="w-3 h-3 rounded-full bg-brand-warning/80" />
            <span className="w-3 h-3 rounded-full bg-brand-success/80" />
          </div>
          <span className="text-xs font-mono text-brand-muted ml-3 uppercase tracking-wider">
            Karthick_BI_System_v1.0.0
          </span>
        </div>
        
        {/* Toggle tabs */}
        <div className="flex bg-white/5 rounded-lg p-0.5 border border-brand-border/30">
          {(["sales", "growth", "satisfaction"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-[10px] uppercase font-mono tracking-wider rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "text-brand-muted hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Interactive KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* KPI 1 */}
        <div className="bg-white/[0.02] border border-brand-border/30 rounded-xl p-3 relative hover:border-brand-primary/30 transition-all duration-300">
          <span className="text-[9px] uppercase tracking-wider text-brand-muted font-mono block mb-1">
            Total Revenue
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg md:text-xl font-bold text-white tracking-tight">
              {activeTab === "sales" ? "$427.8M" : activeTab === "growth" ? "$594.1M" : "96.4%"}
            </span>
            <span className="text-[10px] font-mono text-brand-success flex items-center">
              <TrendingUp className="w-3 h-3 inline mr-0.5" />
              +12%
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white/[0.02] border border-brand-border/30 rounded-xl p-3 relative hover:border-brand-secondary/30 transition-all duration-300">
          <span className="text-[9px] uppercase tracking-wider text-brand-muted font-mono block mb-1">
            Conversion Rate
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg md:text-xl font-bold text-white tracking-tight">
              {activeTab === "sales" ? "24.5%" : activeTab === "growth" ? "32.1%" : "92.8%"}
            </span>
            <span className="text-[10px] font-mono text-brand-primary flex items-center">
              <Zap className="w-3 h-3 inline mr-0.5" />
              Optimal
            </span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white/[0.02] border border-brand-border/30 rounded-xl p-3 relative hover:border-brand-accent/30 transition-all duration-300">
          <span className="text-[9px] uppercase tracking-wider text-brand-muted font-mono block mb-1">
            Query Execution
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg md:text-xl font-bold text-white tracking-tight">
              &lt; 240ms
            </span>
            <span className="text-[9px] font-mono text-brand-accent">
              SQL Peak
            </span>
          </div>
        </div>
      </div>

      {/* Main Dynamic Chart Area */}
      <div className="bg-white/[0.01] border border-brand-border/20 rounded-xl p-4 mb-4 relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">
            Performance Trend Line (Real-time Analysis)
          </span>
          <span className="text-[10px] font-mono text-brand-primary flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Live Insights
          </span>
        </div>

        {/* Line Chart */}
        <div className="relative w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
          >
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = padding + (i * (height - padding * 2)) / 4;
              return (
                <line
                  key={i}
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Gradient Fill Under the Line */}
            <motion.path
              key={`grad-${activeTab}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d={getGradientPath()}
              fill="url(#chartGlow)"
            />

            {/* Glowing Trend Line */}
            <motion.path
              key={`line-${activeTab}`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              d={getSvgPath()}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated Data Nodes (dots) on line peaks */}
            {dataPoints.map((val, index) => {
              const xStep = (width - padding * 2) / (dataPoints.length - 1);
              const maxVal = Math.max(...dataPoints, 10);
              const minVal = 0;
              const yRange = maxVal - minVal;
              const x = padding + index * xStep;
              const y = height - padding - ((val - minVal) / yRange) * (height - padding * 2);

              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    className="fill-brand-bg stroke-brand-primary stroke-2"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="10"
                    className="fill-none stroke-brand-primary/30 stroke-1 animate-ping"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Skill Ecosystem Badges in the mock dashboard */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">
          Integrated Technologies:
        </span>
        <div className="flex gap-2">
          {/* Dashboard technology icon pills */}
          <div className="w-6 h-6 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-brand-primary hover:bg-brand-primary/10 transition-colors" title="SQL Database">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary/10 transition-colors" title="Python Scripts">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-brand-accent hover:bg-brand-accent/10 transition-colors" title="Power BI & Excel Model">
            <FileSpreadsheet className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-lg bg-white/5 border border-brand-border/40 flex items-center justify-center text-brand-success hover:bg-brand-success/10 transition-colors" title="Data Visualization">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
