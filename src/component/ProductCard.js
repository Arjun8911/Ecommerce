import { useEffect } from "react";
import { FiStar } from "react-icons/fi";
const ShipingCart = [];
const GetCartItem = JSON.parse(localStorage.getItem("ShipingCart"));
export default function ProductCard(props) {
  const handleCart = (e) => {
    ShipingCart.push(e);
    localStorage.setItem("ShipingCart", JSON.stringify(ShipingCart));
  };
  useEffect(() => {}, []);
  return (
    <div className="product-card">
      <div className="product-card-img">
        <span className="discount">{props.discount}% off</span>
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="product-card-body">
        <div className="product-card-info mt-3">
          <h5 className="title">{props.title}</h5>
          <span className="price">${props.price}</span>
        </div>
        <div className="product-card-des">
          <span className=" text-secondary small">{props.description}</span>
        </div>
        <div className="product-card-des mt-1">
          <span className="small text-success fw-bold d-flex align-items-center">
            <FiStar className="fs-6" />
            &nbsp;{props.rating} &nbsp;
            <span className="text-primary fw-normal">(Rating & Review)</span>
          </span>
        </div>
        <div className="product-card-action mt-4">
          <button
            type="button"
            onClick={() => handleCart(props.id)}
            className="btn btn-outline-primary btn-small"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
