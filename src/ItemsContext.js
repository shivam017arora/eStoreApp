import React, { useEffect, useState } from "react";
const Context = React.createContext();

const CustomProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const link =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(link)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const toggleCart = (id) => {
    const imageObject = photos.find((img) => img.id === id);
    if (cart.find((item) => item === imageObject)) {
      setCart(cart.filter((item) => item !== imageObject));
    } else {
      setCart([...cart, imageObject]);
    }
  };

  const toggleFavorite = (id) => {
    const updatedArr = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      } else {
        return photo;
      }
    });
    setPhotos(updatedArr);
  };

  return (
    <Context.Provider
      value={{
        photos: photos,
        cart: cart,
        toggleFavorite: toggleFavorite,
        toggleCart: toggleCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CustomProvider, Context };
