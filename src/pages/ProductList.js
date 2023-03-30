import Container from "react-bootstrap/Container";
import ProductData from "../services/ProductApi";
import { useState } from "react";
import ProductCard from "../component/ProductCard";
export default function ProductList() {
  const [product, setProduct] = useState(ProductData);
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
                status={false}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
