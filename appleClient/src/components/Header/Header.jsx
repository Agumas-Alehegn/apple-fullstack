import "../../css/bootstrap.css";
import "../../css/general.css";
import "../../css/nav.css";
import NLogo from "../../assets/image/icons/apple-logo-icon.svg";
import searchIcon from "../../assets/image/icons/search.svg";
import bagIcon from "../../assets/image/icons/bag.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="md" className="home-page-nav">
      <Container className="home-page-nav-wrap  container">
        <Navbar.Brand as={Link} to="/" className="me-auto nav-item">
          <img
            src={NLogo}
            className="navBrand d-inline-block align-center"
            alt=" "
          />
        </Navbar.Brand>
        <div className="d-flex">
          <Nav.Link
            as={Link}
            to="#"
            className=" p-2 align-self-center d-md-none"
          >
            <img src={searchIcon} className=" " alt=" " />
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Cart"
            className=" p-2 align-self-center   d-md-none"
          >
            <img src={bagIcon} className=" " alt=" " />
          </Nav.Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ul">
            <Nav.Link as={Link} to="/Store" className="li">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/Mac" className="li">
              Mac
            </Nav.Link>
            <Nav.Link as={Link} to="/Iphone" className="li">
              Iphone
            </Nav.Link>
            <Nav.Link as={Link} to="/iPad" className="li">
              iPad
            </Nav.Link>
            <Nav.Link as={Link} to="/Watch" className="li">
              Watch
            </Nav.Link>
            <Nav.Link as={Link} to="/Vision" className="li">
              Vision
            </Nav.Link>
            <Nav.Link as={Link} to="/Airpods" className="li">
              Airpods
            </Nav.Link>
            <Nav.Link as={Link} to="/TV&Home" className="li text-nowrap">
              TV & Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Entertainment" className="li">
              Entertainment
            </Nav.Link>
            <Nav.Link as={Link} to="/Accessories" className="li">
              Accessories
            </Nav.Link>
            <Nav.Link as={Link} to="/Support" className="li">
              Support
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="d-none  d-md-block  li p-2"
              to="/Search"
            >
              <img src={searchIcon} className="d-none d-md-block " alt=" " />
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="d-none d-md-block  li p-2"
              to="/Cart"
            >
              <img className="d-none d-md-block" src={bagIcon} alt=" " />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
