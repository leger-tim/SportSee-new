import "../style/Line.css";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Fonction de rendu personnalisée pour le Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "5px 10px 5px 10px",

          border: "1px solid #ccc",
        }}
      >
        <p>
          <b>{`${payload[0].value} min`}</b>
        </p>
      </div>
    );
  }

  return null;
};

export default function LineSport({ averageSessionsData }) {
  return (
    <div className="line-box">
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          data={averageSessionsData}
          background={{ fill: "#ff0000" }}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="red" fill="red" />

          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#f9c3c3"
            activeDot={{ r: 3, fill: "white" }}
            dot={false}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="duree">Durée moyenne des sessions</div>
    </div>
  );
}
