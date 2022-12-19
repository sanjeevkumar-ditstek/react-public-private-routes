import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AppContext from "../context/App.context";
import { ROUTES } from "../util/routes";

const AppBar = () => {
  const { loggedInUser, isLoggedIn, setLoggedInUser } = useContext(AppContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          DEMO React App
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={ROUTES.HOME} className="nav-link">
              Home
            </Link>
            <Link to={ROUTES.PRODUCTS} className="nav-link">
              Products
            </Link>
            <Link to={ROUTES.ABOUT} className="nav-link">
              About
            </Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <NavDropdown title={`${loggedInUser.firstName} ${loggedInUser.lastName}`} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => {
                  setLoggedInUser({})
                }}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to={ROUTES.LOGIN} className="nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
