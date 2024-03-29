import "../assets/Styles.css";
import "../index.css";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import { openTradesDate } from "../data";

function OpenTrades() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Open Trades</h1>
        <div className="scrollable-table-container table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Quantity</th>
                <th>Buy In Date</th>
                <th>Buy In USDT</th>
                <th>Current Value USDT</th>
              </tr>
            </thead>
            <tbody>
              {openTradesDate.map((item, index) => (
                <tr key={index}>
                  <td>{item.asset}</td>
                  <td>{item.quantity_amount}</td>
                  <td>{item.date}</td>
                  <td>{item.usdt}</td>
                  <td>{item.asset_usdt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

OpenTrades.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      asset: PropTypes.string,
      quantity_amount: PropTypes.number,
      date: PropTypes.string,
      usdt: PropTypes.string,
      asset_usdt: PropTypes.string,
    })
  ).isRequired,
};

export default OpenTrades;
