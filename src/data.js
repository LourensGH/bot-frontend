import { useState, useEffect } from "react";

export function Data() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
}
// test data for graphs
export const data2 = [
  { name: "Jan - 1", value: 100 },
  { name: "Jan - 8", value: 499 },
  { name: "Jan - 15", value: 301 },
  { name: "Jan - 22", value: 200 },
  { name: "Jan - 29", value: 100 },
  { name: "Feb - 5", value: 300 },
  { name: "Feb - 12", value: 100 },
  { name: "Feb - 19", value: 200 },
];

export const data3 = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 400 },
];

export const data4 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const dataR = [
  {
    name: "Jan - 1",
    uv: 7000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jan - 8",
    uv: 699,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jan - 15",
    uv: 40456,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jan - 22",
    uv: 30234,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jan - 29",
    uv: 39876,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Feb - 5",
    uv: 29012,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Feb - 12",
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
];

export const dataS = [
  {
    name: "Jan",
    uv: 40,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 100,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 48,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 60,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 70,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 80,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 93,
    pv: 4300,
    amt: 2100,
  },
];

export const dataN = [
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

export const dataP = [
  {
    name: "Jan",
    uv: 40,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 50,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 68,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 78,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 47,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 30,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 93,
    pv: 4300,
    amt: 2100,
  },
];

export const tableData = [
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "ETH/USD",
    quantity_amount: "2",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "ETH/USD",
    quantity_amount: "2",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "ETH/USD",
    quantity_amount: "2",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "ETH/USD",
    quantity_amount: "2",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "ETH/USD",
    quantity_amount: "2",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "XRP/USD",
    quantity_amount: "100",
    type: "BUY",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "DOT/USD",
    quantity_amount: "48",
    type: "SELL",
  },
  {
    date: "3/1/2021",
    time: "12:00",
    asset_pair: "BTC/USD",
    quantity_amount: "1",
    type: "BUY",
  },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const openTradesDate = [
  {
    asset: "XRP",
    quantity_amount: 100,
    date: "3/1/2021",
    usdt: 100,
    asset_usdt: 100,
  },
  {
    asset: "ADA",
    quantity_amount: 100,
    date: "3/1/2021",
    usdt: 100,
    asset_usdt: 100,
  },
  {
    asset: "BNB",
    quantity_amount: 100,
    date: "3/1/2021",
    usdt: 100,
    asset_usdt: 100,
  },
  {
    asset: "SOL",
    quantity_amount: 100,
    date: "3/1/2021",
    usdt: 100,
    asset_usdt: 100,
  },
];

export const dataCompleted = [
  {
    id: 1,
    date: "3/1/2021",
    asset_pair: "XRP/USD",
    profit: "100",
  },
  {
    id: 2,
    date: "3/1/2021",
    asset_pair: "BTC/USD",
    profit: "-200",
  },
  {
    id: 3,
    date: "3/1/2021",
    asset_pair: "ETH/USD",
    profit: "300",
  },
  {
    id: 4,
    date: "3/1/2021",
    asset_pair: "DOT/USD",
    profit: "400",
  },
  {
    id: 5,
    date: "3/1/2021",
    asset_pair: "XRP/USD",
    profit: "100",
  },
  {
    id: 6,
    date: "3/1/2021",
    asset_pair: "BTC/USD",
    profit: "-200",
  },
  {
    id: 7,
    date: "3/1/2021",
    asset_pair: "ETH/USD",
    profit: "300",
  },
  {
    id: 8,
    date: "3/1/2021",
    asset_pair: "DOT/USD",
    profit: "400",
  },
  {
    id: 9,
    date: "3/1/2021",
    asset_pair: "XRP/USD",
    profit: "100",
  },
  {
    id: 10,
    date: "3/1/2021",
    asset_pair: "BTC/USD",
    profit: "-200",
  },
  {
    id: 11,
    date: "3/1/2021",
    asset_pair: "ETH/USD",
    profit: "300",
  },
  {
    id: 12,
    date: "3/1/2021",
    asset_pair: "DOT/USD",
    profit: "400",
  },
  {
    id: 13,
    date: "3/1/2021",
    asset_pair: "XRP/USD",
    profit: "100",
  },
  {
    id: 14,
    date: "3/1/2021",
    asset_pair: "BTC/USD",
    profit: "-200",
  },
  {
    id: 15,
    date: "3/1/2021",
    asset_pair: "ETH/USD",
    profit: "300",
  },
  {
    id: 16,
    date: "3/1/2021",
    asset_pair: "DOT/USD",
    profit: "400",
  },
  {
    id: 17,
    date: "3/1/2021",
    asset_pair: "XRP/USD",
    profit: "100",
  },
  {
    id: 18,
    date: "3/1/2021",
    asset_pair: "BTC/USD",
    profit: "-200",
  },
  {
    id: 19,
    date: "3/1/2021",
    asset_pair: "ETH/USD",
    profit: "300",
  },
  {
    id: 20,
    date: "3/1/2021",
    asset_pair: "DOT/USD",
    profit: "400",
  },
];
