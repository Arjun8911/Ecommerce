import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/layout/Header";
import ProductList from "./pages/ProductList";
import CartItemList from "./pages/CartItemList";
import { createContext, useEffect, useState } from "react";
export const GlobalData = createContext();
let GetCartItem = JSON.parse(localStorage.getItem("CartStorage"));
function App() {
  const [cartItem, setCartItem] = useState(() => GetCartItem || []);
  console.log(cartItem);
  useEffect(() => {}, [cartItem]);
  return (
    <BrowserRouter>
      <GlobalData.Provider value={{ cartItem, setCartItem }}>
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
