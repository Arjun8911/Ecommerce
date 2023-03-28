import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { GlobalData } from "../../App";
const GetCartItem = JSON.parse(localStorage.getItem("ShipingCart"));
export default function Header() {
  const { cart, value } = useContext(GlobalData);
  return (
    <Navbar bg="light" className="header py-4" variant="light">
      <Container>
        <Navbar.Brand
          href="#"
          className="fw-medium text-white d-flex align-items-center"
        >
          <FiShoppingBag />
          &nbsp;&nbsp;ShopingCart
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link className="text-white position-relative" to="/">
            <FiShoppingCart className="fs-4" />
            <span className="text-white badgeCart">{GetCartItem?.length}</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
