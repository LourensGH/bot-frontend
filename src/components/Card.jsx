import "../assets/Styles.css";
import PropTypes from "prop-types";

function Card({ asset_pair, profit, date }) {
  const getColorByType = (profit) => {
    return profit > 0 ? "green" : profit < 0 ? "red" : "black";
  };

  return (
    <div className="card-all">
      <h4>{date}</h4>
      <div className="card-pages">
        <div>
          <h2>{asset_pair}</h2>
          <h2>Profit: {profit}</h2>
        </div>
        <div
          style={{ backgroundColor: getColorByType(profit) }}
          className="profit-color"
        ></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  asset_pair: PropTypes.string.isRequired,
  profit: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
