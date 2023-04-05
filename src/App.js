import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
export const GlobalData = createContext();
let GetCartItem = JSON.parse(localStorage.getItem("CartStorage"));
function App() {
  const [cartItem, setCartItem] = useState(() => GetCartItem || []);
  useEffect(() => {}, [cartItem]);
  return (
    <BrowserRouter>
      <GlobalData.Provider value={{ cartItem, setCartItem }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </GlobalData.Provider>
    </BrowserRouter>
  );
}

export default App;
