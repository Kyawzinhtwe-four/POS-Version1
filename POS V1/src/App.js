import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import OverLay from "./Components/UI/OverLay";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHandler = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };
  console.log(itemList);

  return (
    <>
      {overlay ? <OverLay onFalseOverlay={overlayFalseState} /> : ""}
      {overlay ? <Modal onGetAllItem={allItemHandler} /> : ""}

      <Header onTrueOverlay={overlayTrueState} />
      <Main itemList={itemList} />
    </>
  );
}

export default App;
