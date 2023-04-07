import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="category-list">
          <div className="category-list-item">
            <Link
              className="category-list-item-title text-white text-decoration-none"
              to="products"
            >
              Start Shoping
            </Link>
          </div>
          {category.map((item, index) => (
            <Link
              to={`products/${item}`}
              className="category-list-item text-decoration-none"
              key={index}
            >
              <span className="category-list-item-title text-white">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
