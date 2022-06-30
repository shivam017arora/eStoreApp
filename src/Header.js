import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Context } from "./ItemsContext";

const Header = () => {
  const { cart } = React.useContext(Context);
  return (
    <header>
      <h2>
        {" "}
        <Link to="/">Pic Some</Link>
      </h2>
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      <Link to="/cart">
        {cart.length === 0 ? (
          <ShoppingCartIcon />
        ) : (
          <ShoppingCartCheckoutIcon />
        )}
      </Link>
    </header>
  );
};

export default Header;
