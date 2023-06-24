import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiShoppingCart, FiSearch } from "react-icons/fi";
import { GlobalData } from "../../App";
export default function Header() {
  const { cartItem } = useContext(GlobalData);
  return (
    <Navbar bg="light" className="header py-4" variant="light">
      <Container>
        <Link
          to="/"
          className="fw-medium text-white d-flex align-items-center navbar-brand"
        >
          <FiShoppingBag />
          &nbsp;&nbsp;ShopingCart
        </Link>
        <div className="nav-search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="What are you looking for ?"
          />
        </div>
        <Nav className="ms-auto align-items-center">
          <Link
            className="text-white position-relative btn btn-primary me-4"
            to="/login"
          >
            Login/Register
          </Link>
          <Link className="text-white position-relative" to="/cart">
            <FiShoppingCart className="fs-4" />
            {cartItem ? (
              <>
                {cartItem.length > 0 ? (
                  <span className="text-white badgeCart">
                    {cartItem.length}
                  </span>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
