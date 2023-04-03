import { useContext, useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { GlobalData } from "../App";

let CartStorage = [];
export default function ProductCard(props) {
  const { cartItem, setCartItem } = useContext(GlobalData);
  const handleCart = (id) => {
    CartStorage = JSON.parse(localStorage.getItem("CartStorage")) || [];
    CartStorage.push(id);
    setCartItem([...CartStorage]);
    localStorage.setItem("CartStorage", JSON.stringify(CartStorage));
  };
  useEffect(() => {}, [CartStorage]);
  return (
    <div className="product-card">
      <div className="product-card-img">
        {/* <span className="discount">{props.discount}% off</span> */}
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="product-card-body">
        <div className="product-card-info mt-3">
          <h5 className="title">{props.title}</h5>
        </div>

        <div className="product-card-des mt-1">
          <span className="small text-success fw-bold d-flex align-items-center">
            <FiStar className="fs-6" />
            &nbsp;{props.rating.rate} &nbsp;
            <span className="text-primary fw-normal">
              ({props.rating.count} Rating & Review)
            </span>
          </span>
        </div>
        <div className="product-card-action mt-4">
          <div className="product-card-price">
            <span className="price">${props.price}</span>
          </div>
          <div>
            {(cartItem ? cartItem : []).includes(props.id) ? (
              <button
                type="button"
                disabled
                className="btn btn-outline-primary btn-small active"
              >
                Added
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleCart(props.id)}
                className="btn btn-outline-primary btn-small"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
