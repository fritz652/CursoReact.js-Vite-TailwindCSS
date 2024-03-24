import { createContext, useState, useEffect } from "react";

import dataJson from "../Data/data.json"; // se importa el json cuando esta dentro del archivo

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart . Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail . Open/Clouse
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const clouseProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu . Open/Clouse
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const clouseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart . Add proddcusts to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shoping Cart  .  Order
  const [order, setOrder] = useState([]);

  // Get produts
  const [items, setItems] = useState(null);

  // Get produts by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log(searchByTitle);

  useEffect(() => {
    setItems(dataJson); // cuando se usa json dentro del archivo no se usa fetch
    /* Codigo comentado que iria si se usa una api en la nuve */
    /* fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data)); */
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        clouseProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        clouseCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
