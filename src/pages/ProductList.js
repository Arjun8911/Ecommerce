import Container from "react-bootstrap/Container";
import ProductData from "../services/ProductApi";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
const GetCartItem = JSON.parse(localStorage.getItem("ShipingCart"));
export default function ProductList() {
  const [product, setProduct] = useState(ProductData);
  const CartProducts = product.filter((e) =>
    (GetCartItem ? GetCartItem : []).includes(e.id)
  );
  useEffect(() => {}, [product]);

  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Choose what you want to buy</h2>
          </div>
        </div>

        <div className="row">
          {product.map((product, index) => (
            <div className="col-md-3 mt-5" key={index}>
              <ProductCard
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                discount={product.discountPercentage}
                description={product.description}
                rating={product.rating}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2>Cart Items</h2>
          </div>
        </div>
        <div className="row">
          {CartProducts.map((product, index) => (
            <div className="col-md-3 mt-5" key={index}>
              <ProductCard
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                discount={product.discountPercentage}
                description={product.description}
                rating={product.rating}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
