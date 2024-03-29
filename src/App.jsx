import "./App.css";
import PerformanceChart from "./components/PerformanceChart";
import ChartImproved from "./components/ChartImproved";
import TransactionsTable from "./components/Transactions";
import { dataN, dataR, dataS, Data, tableData } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenTrades from "./pages/OpenTrades";
import CompletedTrades from "./pages/CompletedTrades";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

export default function App() {
  console.log(Data());

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="container">
                <div className="flexbox">
                  <div className="charts-top card">
                    <h2>Total Trades</h2>
                    <ChartImproved data={dataN} />
                  </div>
                  <div className="charts-top card">
                    <h2>Returns Per Week (R)</h2>
                    <ChartImproved data={dataR} />
                  </div>
                  <div className="charts-top card">
                    <h2>Success Rate (%)</h2>
                    <ChartImproved data={dataS} />
                  </div>
                </div>
                <PerformanceChart data={Data()} />
                <div className="table-container">
                  <TransactionsTable data={tableData} />
                </div>
              </div>
            </>
          }
        />
        <Route path="/OpenTrades" element={<OpenTrades />} />
        <Route path="/CompletedTrades" element={<CompletedTrades />} />
      </Routes>
    </Router>
  );
}
