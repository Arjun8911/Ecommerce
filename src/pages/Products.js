import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { useParams } from "react-router-dom";
export default function Products() {
  const [checkedItem, setCheckedItem] = useState("");
  const { categorySlug } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  console.log(checkedItem);
  const GetProducts = () => {
    if (categorySlug != undefined) {
      fetch(`https://fakestoreapi.com/products/category/${categorySlug}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log(err));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log(err));
    }
  };

  const GetCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetProducts();
    GetCategories();
  }, [checkedItem]);
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 pe-4 border-end">
              <div className="px-3 bg-gray radius">
                <div className="border-bottom pt-4 mb-4">
                  <h5 className="mb-4">Choose Category</h5>
                  {category.map((item, index) => (
                    <div
                      className="form-check mb-4 text-capitalize"
                      key={index}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value={item}
                        id={item}
                        defaultChecked={categorySlug == item ? true : false}
                        onChange={(e) => setCheckedItem(e.target.value)}
                      />
                      <label className="form-check-label" for={`check${index}`}>
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9 ps-4">
              <div className="row">
                <div className="col-md-8">
                  <h2>What you want to buy</h2>
                </div>
                <div className="col-md-4">
                  <select className="form-control form-select">
                    <option>Popularity</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>
                </div>
              </div>
              <div className="row">
                {product.map((product, index) => (
                  <div className="col-md-4 mt-5" key={index}>
                    <ProductCard
                      thumbnail={product.image}
                      rating={product.rating}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                      id={product.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
