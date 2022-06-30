import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Context } from "./ItemsContext";

const CartItem = ({ item, price }) => {
  const { toggleCart } = React.useContext(Context);

  return (
    <div className="cart-item">
      <img src={item.url} width="130px" alt="" />
      <p>
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <div onClick={() => toggleCart(item.id)}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartItem;
