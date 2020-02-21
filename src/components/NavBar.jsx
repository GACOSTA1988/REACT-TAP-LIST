import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GoogleFontLoader from "react-google-font-loader";
import { Link, Route } from "react-router-dom";

function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: "white",
    fontColor: "black",
    fontWeight: "bold",
    fontFamily: "BowlbyOneSC",
    width: "80%",
    display: "inline-block",
    textAlign: "center",
    marginTop: "15px",
    border: "15px solid black"
  };
  return (
    <div style={navBarAddStyles}>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="light">
        <Navbar.Brand href="#">⚡️BREWS ON TAP⚡️</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="FEATURES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#newtapform">
                ADD A NEW KEG
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="mr-auto">
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CLOTHING</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="mr-auto">
            <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                BEER RELEASES
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
