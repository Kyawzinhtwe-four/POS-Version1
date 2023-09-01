import "./NewItemForm.css";
import { useState } from "react";

const DUMMY_CATEGORY = [
  { id: 1, category: "Health" },
  { id: 2, category: "Beauty" },
  { id: 3, category: "Electronic Device" },
  { id: 4, category: "Fashion" },
  { id: 5, category: "Home and Life Style" },
];

const NewItemForm = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemCat, setItemCat] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");

  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
  };
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemQtyHandler = (e) => {
    setItemQty(e.target.value);
  };
  const itemCatHandler = (e) => {
    setItemQty(e.target.value);
  };

  const newItemFormHandler = (e) => {
    e.preventDefault();
    const newItem = {
      itemId: Math.random(),
      itemCat: itemCat,
      itemName: itemName,
      itemPrice: itemPrice,
      itemQty: itemQty,
    };
    props.onNewItemData(newItem);

    setItemCat("");
    setItemName("");
    setItemPrice("");
    setItemQty("");
  };

  return (
    <form action="" className="new-item-form" onSubmit={newItemFormHandler}>
      <label htmlFor="item-cat">Category Name</label>
      <select name="" id="item-cat" onChange={itemCatHandler}>
        {DUMMY_CATEGORY.map((cat) => (
          <option value={cat.id}>{cat.category}</option>
        ))}
      </select>
      <label htmlFor="item-name">Item Name</label>
      <input
        type="text"
        id="item-name"
        value={itemName}
        onChange={itemNameHandler}
      />
      <label htmlFor="item-price">Price</label>
      <input
        type="number"
        id="item-price"
        value={itemPrice}
        onChange={itemPriceHandler}
      />
      <label htmlFor="item-qty">Quantity</label>
      <input
        type="number"
        id="item-qty"
        value={itemQty}
        onChange={itemQtyHandler}
      />
      <button className="btn">Confirm</button>
    </form>
  );
};
export default NewItemForm;
