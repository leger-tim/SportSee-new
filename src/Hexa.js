import "./Hexa.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function HexaSport() {
  return (
    <div className="radar">
      <RadarChart
        outerRadius={80}
        width={260}
        height={260}
        data={data}
        fill="black"
        stroke="white"
        margin={0}
      >
        <PolarGrid
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 10, 20, 40, 65]}
          stroke="white"
        />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 15 }}
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
    </div>
  );
}
