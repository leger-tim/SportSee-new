import "./Line.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function LineSport() {
  return (
    <>
      <div className="line-box">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          data={data}
          background={{ fill: "#ff0000" }}
          width={260}
          height={260}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="red" fill="red" />
          <XAxis dataKey="name" tickLine={false} tick={false} />
          <YAxis tick={false} tickLine={false} orientation="right" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#f9c3c3"
            activeDot={{ r: 8 }}
            // strokeWidth={3}
          />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    </>
  );
}
