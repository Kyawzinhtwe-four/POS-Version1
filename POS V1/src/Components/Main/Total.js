import "./Total.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Total = (props) => {
  return (
    <Card className="right-section-bottom">
      <span>Total Amount : </span>
      <span>{props.totalAmount} </span>
      <span> - MMK</span>
      <Button className="btn-buy">Buy</Button>
    </Card>
  );
};
export default Total;
