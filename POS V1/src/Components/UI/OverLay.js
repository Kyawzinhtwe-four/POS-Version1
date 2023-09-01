import "./OverLay.css";
const OverLay = (props) => {
  const removeOverLayHandler = () => {
    props.onFalseOverlay(false);
  };
  return <div className="back-drop" onClick={removeOverLayHandler}></div>;
};
export default OverLay;
