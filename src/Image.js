import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Context } from "./ItemsContext";

function Image({ className, src, alt }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { cart, toggleFavorite, toggleCart } = React.useContext(Context);

  const heartIcon = isHovered && (
    <div
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(src.id)}
      style={{ color: src.isFavorite ? "red" : "white" }}
    >
      {" "}
      <FavoriteIcon />
    </div>
  );
  const cartIcon = isHovered && (
    <div className="ri-add-circle-line cart" onClick={() => toggleCart(src.id)}>
      {cart.find((item) => item === src) ? (
        <RemoveShoppingCartIcon />
      ) : (
        <AddShoppingCartIcon />
      )}
    </div>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src.url} alt={alt} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
