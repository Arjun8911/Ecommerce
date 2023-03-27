import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">ShopingCart</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            My Cart
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
