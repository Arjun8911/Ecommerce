import { useEffect, useState } from "react";

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
          {category.map((item, index) => (
            <div className="category-list-item" key={index}>
              <span className="category-list-item-title text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
