import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Bar.css";

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarSport() {
  return (
    <>
      <BarChart
        className="bar"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <XAxis tickLine={false} tickFormatter={(value) => value + 1} />
        <YAxis tickLine={false} orientation="right" axisLine={false} />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          wrapperStyle={{
            paddingBottom: "20px",
          }}
          iconType="circle"
        />
        <Bar
          dataKey="pv"
          fill="#282d30"
          radius={[3.5, 3.5, 0, 0]}
          barSize={7}
          name="Poids (kg)"
        />
        <Bar
          dataKey="uv"
          fill="#e60000"
          radius={[3.5, 3.5, 0, 0]}
          barSize={7}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
      <div className="hello">Activité Quotidienne</div>
    </>
  );
}
