import { createContext, useState } from "react";

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
