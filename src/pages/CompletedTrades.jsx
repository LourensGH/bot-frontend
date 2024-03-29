import "../assets/Styles.css";
import Navbar from "../components/Navbar";
import CompletedTradesCard from "../components/CompletedTradeCard";

function CompletedTrades() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Completed Trades</h1>
        <CompletedTradesCard />
      </div>
    </>
  );
}

export default CompletedTrades;
