import "./Brand.css";
import Card from "../UI/Card";
const Brand = (props) => {
  return (
    <Card className="logo">
      <i className="fa-brands fa-apple logo-icon"></i>
      <h2 className="title">My POS</h2>
    </Card>
  );
};
export default Brand;
