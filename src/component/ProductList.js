import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ProductsData from "../services/ProductsData";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
export default function ProductList() {
  const [filter] = useState(ProductsData);
  const [products, setProducts] = useState(ProductsData);

  function handleFilter(e) {
    let keyword = e.target.value;
    let name = e.target.name;
    console.log(name);
    if (keyword != "" && name == "title") {
      let title = filter.filter((element) => {
        return element.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setProducts(title);
    }
    if (keyword != "" && name == "category") {
      let category = filter.filter((element) => {
        return element.category.toLowerCase().includes(keyword.toLowerCase());
      });
      setProducts(category);
    }
    if (keyword != "" && name == "brand") {
      let brand = filter.filter((element) => {
        return element.brand.toLowerCase().includes(keyword.toLowerCase());
      });
      setProducts(brand);
    } else if (keyword == "") {
      setProducts(filter);
    }
  }

  useEffect(() => {
    console.log("rendered");
  }, [products]);

  return (
    <Container className="mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <input
              type="text"
              name="title"
              onChange={handleFilter}
              placeholder="Search here..."
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <select
              name="category"
              onChange={handleFilter}
              className="form-select"
            >
              <option value="">Select Category</option>
              {filter.map((product) => (
                <option value={product.category}>{product.category}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-4">
            <select
              name="brand"
              onChange={handleFilter}
              className="form-select"
            >
              <option value="">Select Brand</option>
              {filter.map((product) => (
                <option value={product.brand}>{product.brand}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan="2">Product</th>
            <th>Category</th>
            <th>Discount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td style={{ width: "80px" }}>
                <img
                  src={product.thumbnail}
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                  }}
                />
              </td>
              <td>
                {product.title}
                <p className="mb-0">
                  <small className="text-black-50">{product.brand}</small>
                </p>
              </td>
              <td>{product.category}</td>
              <td>
                <Badge bg="success">{product.discountPercentage}%</Badge>
              </td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
