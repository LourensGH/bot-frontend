import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell,
  Legend,
} from 'recharts';
import { data4, COLORS } from '../data';
import "../App.css";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { formatDate } from '../utils/dateformatter';

function PerformanceChart( {data} ) {
  const [ChartWidth, setChartWidth] = useState(window.innerWidth / 1.5);
  const [PieChartwidth, setPieChartWidth] = useState(window.innerWidth / 3.45);

  useEffect(() => {
    function handleResize() {
      setChartWidth(window.innerWidth / 1.5);
      setPieChartWidth(window.innerWidth / 3.45);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flexbox">
      <div className="performance card">
        <h2>PERFORMANCE</h2>
        <AreaChart
        width={ChartWidth}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="record_date" tickFormatter={formatDate}/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="ada_balance" stroke="#D733FF" fill="#BEFF33" />
      </AreaChart>
      </div>
      <div className="pie card">
        <h2>TRADES BY MARKET</h2>
        <PieChart width={PieChartwidth} height={400}>
          <Pie
            data={data4}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data4.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      uv: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default PerformanceChart;
