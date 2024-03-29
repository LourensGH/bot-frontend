import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ChartImproved({ data }) {
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
      <AreaChart
        width={chartWidth}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#33FF90" fill="#33FF90" />
      </AreaChart>
  );
}

ChartImproved.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      uv: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default ChartImproved;
