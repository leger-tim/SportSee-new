import "../style/Hexa.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function HexaSport({ performanceData }) {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={80}
          background={{ fill: "black" }}
          data={performanceData}
          fill="black"
          stroke="white"
        >
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[0, 10, 20, 40, 65]}
            stroke="white"
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "white", fontSize: 10 }}
            tickLine={false}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#be0e0f"
            fill="#be0e0f"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
