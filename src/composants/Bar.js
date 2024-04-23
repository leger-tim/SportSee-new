import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../style/Bar.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#e60000",
          color: "#fff",
          padding: "10px",
        }}
      >
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

export default function BarSport({ activityData }) {
  return (
    <>
      {activityData && (
        <div className="bar-style">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={activityData}
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
              <YAxis
                tickLine={false}
                orientation="left"
                axisLine={false}
                yAxisId="left"
                hide={true}
              />
              <YAxis
                tickLine={false}
                orientation="right"
                axisLine={false}
                yAxisId="right"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                align="right"
                verticalAlign="top"
                wrapperStyle={{
                  paddingBottom: "20px",
                }}
                iconType="circle"
              />
              <Bar
                yAxisId="right"
                dataKey="pv"
                fill="#282d30"
                radius={[3.5, 3.5, 0, 0]}
                barSize={7}
                name="Poids (kg)"
              />
              <Bar
                yAxisId="left"
                dataKey="uv"
                fill="#e60000"
                radius={[3.5, 3.5, 0, 0]}
                barSize={7}
                name="Calories brûlées (kCal)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="hello">Activité Quotidienne</div>
    </>
  );
}
