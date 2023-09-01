import SingleCartItem from "./SingleCartItem";
const CartItem = (props) => {
  return (
    <>
      {props.cartItems.map((item) => (
        <SingleCartItem cartItem={item} />
      ))}
    </>
  );
};
export default CartItem;
