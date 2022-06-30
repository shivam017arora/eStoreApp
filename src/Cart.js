import React from "react";
import CartItem from "./CartItem";
import { Context } from "./ItemsContext";

const fixedPrice = 5.99;

function Cart() {
  const { cart } = React.useContext(Context);
  const [placeOrderButtonText, setPlaceOrderButtonText] =
    React.useState("Place Order");

  const items = cart.map((item) => (
    <CartItem key={item.id} item={item} price={fixedPrice} />
  ));

  const placeOrder = () => {
    if (cart.length > 0) {
      setPlaceOrderButtonText("Ordering...");
      setTimeout(() => {
        setPlaceOrderButtonText("Order Placed!");
      }, 3000);
    } else {
      setPlaceOrderButtonText("Sorry! The cart is empty!");
      setTimeout(() => {
        setPlaceOrderButtonText("Place Order");
      }, 2000);
    }
  };

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {items}
      <p>
        Total:{" "}
        {(fixedPrice * cart.length).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="order-button">
        <button onClick={placeOrder}>{placeOrderButtonText}</button>
      </div>
    </main>
  );
}

export default Cart;
