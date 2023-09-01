import "./SingleItem.css";
const SingleItem = (props) => {
  const cartItemHandler = () => {
    const cartItem = {
      itemId: props.itemId,
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      count: 1,
    };
    props.onGetCartitemData(cartItem);
  };
  return (
    <div className="item" key={props.itemId}>
      <ul>
        <li>{props.itemName}</li>
        <li>- {props.itemPrice} MMK</li>
        <li onClick={cartItemHandler}>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
};
export default SingleItem;
