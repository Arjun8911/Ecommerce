import { useContext, useEffect, useState } from "react";
import { GlobalData } from "../App";
import { FiTrash2 } from "react-icons/fi";
export default function Cart() {
  const [product, setProduct] = useState([]);
  const { cartItem, setCartItem } = useContext(GlobalData);
  const CartProducts = product.filter((e) =>
    (cartItem ? cartItem : []).includes(e.id)
  );
  const handleRemoveItem = (id) => {
    const index = cartItem.indexOf(id);
    if (index > -1) {
      let cartItemAll = cartItem;
      cartItemAll.splice(index, 1);
      setCartItem([...cartItemAll]);
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Cart Items</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead>
                    <tr>
                      <th colSpan={2}>Product Information</th>
                      <th>Discount</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartProducts.map((item, index) => (
                      <tr key={index}>
                        <td style={{ width: "90px" }}>
                          <div className="table-img">
                            <img alt="Product Img" src={item.image} />
                          </div>
                        </td>
                        <td>
                          <h5 className="fw-semibold mb-1">{item.title}</h5>
                        </td>
                        <td>
                          <span className="badge bg-success">
                            {item.rating.rate}
                          </span>
                        </td>
                        <td className="fw-semibold">${item.price}</td>
                        <td>
                          <span
                            className="cursor"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <FiTrash2 className="text-danger fs-5" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="text-end">Total Discounted Amount</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
