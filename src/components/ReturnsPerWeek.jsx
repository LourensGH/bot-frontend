import "../App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { data2 } from "../data";
import { useState, useEffect } from "react";

function ReturnsPerWeek() {
  const [chartWidth, setChartWidth] = useState(window.innerWidth / 3.2);

  useEffect(() => {
    function handleResize() {
      setChartWidth(window.innerWidth / 4);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2>RETURNS BY WEEK</h2>
      <LineChart
        width={chartWidth}
        height={300}
        data={data2}
        margin={{
          top: 40,
          right: 35,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}

export default ReturnsPerWeek;
