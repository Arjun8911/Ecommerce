import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";

export default function Header() {
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
          <Link className="text-white" to="/">
            <FiShoppingCart className="fs-4" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
