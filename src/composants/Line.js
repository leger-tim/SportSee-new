import "../style/Line.css";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
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
const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  console.log(props);
  return (
    <Rectangle
      fill="#e60000"
      stroke="#e60000"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};
export default function LineSport({ averageSessionsData }) {
  return (
    <div className="line-box">
      <ResponsiveContainer width="100%" height="100%">
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

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#f9c3c3"
            activeDot={{ r: 3, fill: "white" }}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="duree">Durée moyenne des sessions</div>
      <div className="semaine">
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
        <p>D</p>
      </div>
    </div>
  );
}
