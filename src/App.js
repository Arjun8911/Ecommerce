import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/layout/Header";
import ProductList from "./pages/ProductList";
import CartItemList from "./pages/CartItemList";
import { createContext, useState } from "react";

export const GlobalData = createContext();

function App() {
  const [cart, setCart] = useState(0);
  const [cartItem, setCartItem] = useState([""]);
  const AddCart = (data) => {
    setCartItem(data);
  };
  return (
    <BrowserRouter>
      <GlobalData.Provider
        value={{ cart: cart, cartItem: cartItem, AddCart: AddCart }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="MyCart" element={<CartItemList />} />
        </Routes>
      </GlobalData.Provider>
    </BrowserRouter>
  );
}

export default App;
