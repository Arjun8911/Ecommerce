import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/layout/Header";
import ProductList from "./component/ProductList";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
