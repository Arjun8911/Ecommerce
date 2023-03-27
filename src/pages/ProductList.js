import Container from "react-bootstrap/Container";
import LaptopData from "../services/LaptopApi";
import MobileData from "../services/MobileApi";
import { useEffect, useState } from "react";
import Category from "../component/CategoryTabs";
import ProductCard from "../component/ProductCard";
import CategoryData from "../services/CategoryApi";
export default function ProductList() {
  const [laptop, setLaptop] = useState(LaptopData);
  //const [mobile, setMobile] = useState(LaptopData);
  const [category, setCategory] = useState(CategoryData);

  useEffect(() => {}, [laptop]);

  return (
    <Container className="mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Choose what you want to buy</h2>
        </div>
        <div className="col-md-4">
          <div className="btntabs text-end">
            {category.map((item, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-outline-primary"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {laptop.map((laptop, index) => (
          <div className="col-md-3 mt-5" key={index}>
            <ProductCard
              thumbnail={laptop.thumbnail}
              title={laptop.title}
              price={laptop.price}
              discount={laptop.discountPercentage}
              description={laptop.description}
              rating={laptop.rating}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
