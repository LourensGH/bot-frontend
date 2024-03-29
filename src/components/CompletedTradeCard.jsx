import "../assets/Styles.css";
import { dataCompleted } from "../data";
import Card from "./Card";

function CompletedTradesCard() {
  return (
    <>
      <div className="cards-list">
        {dataCompleted.map((item) => (
          <Card
            key={item.id}
            date={item.date}
            asset_pair={item.asset_pair}
            profit={item.profit}
          />
        ))}
      </div>
    </>
  );
}

export default CompletedTradesCard;
