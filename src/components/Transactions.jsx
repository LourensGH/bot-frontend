import "../App.css";
import PropTypes from "prop-types";

function TransactionsTable({ data }) {

  const getColorByType = (type) => {
    return type === 'BUY' ? 'green' : type === 'SELL' ? 'red' : 'black';
  };

  return (
    <div className="scrollable-table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Asset</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.asset_pair}</td>
              <td>{item.quantity_amount}</td>
              <td style={{ color: getColorByType(item.type) }}>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      time: PropTypes.string,
      asset_pair: PropTypes.string,
      quantity_amount: PropTypes.string,
      type: PropTypes.number,
    })
  ).isRequired,
};

export default TransactionsTable;
