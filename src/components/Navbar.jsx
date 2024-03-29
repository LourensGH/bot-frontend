import { useState } from "react";
import { Link } from "react-router-dom";
import Datepicker from "./Datepicker"

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState({});

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(prev => ({
      assets: false,
      timeframe: false,
      trades: false,
      transactions: false,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <div className="nav-bar">
      <h1><Link to="/">The Strat-OG</Link></h1>
      <div className="options">
        <div className="dropdown">
          <button onClick={() => toggleDropdown('assets')} className="dropbtn">
            Assets
          </button>
          {openDropdown.assets && (
            <div className="dropdown-content">
              <a href="#">XRP</a>
              <a href="#">ADA</a>
              <a href="#">BNB</a>
              <a href="#">SOL</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('timeframe')} className="dropbtn">
            Timeframe
          </button>
          {openDropdown.timeframe && (
            <div className="dropdown-content">
              <a href="#">1D</a>
              <a href="#">1W</a>
              <a href="#">1M</a>
              <a href="#">1Y</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('trades')} className="dropbtn">
            Trades
          </button>
          {openDropdown.trades && (
            <div className="dropdown-content">
              <a href="/CompletedTrades">All Completed Trades</a>
              <a href="/OpenTrades">Open Trades</a>
              <a href="#">Profitable Trades</a>
              <a href="#">Non-profitable Trades</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('transactions')} className="dropbtn">
            Transactions
          </button>
          {openDropdown.transactions && (
            <div className="dropdown-content">
              <a href="#">Buys</a>
              <a href="#">Sells</a>
              <a href="#">All</a>
            </div>
          )}
        </div>
      </div>
      <div className="date">
        <Datepicker />
      </div>
    </div>
  );
}

export default Navbar;
