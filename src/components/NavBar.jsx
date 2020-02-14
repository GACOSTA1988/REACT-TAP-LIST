import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';

function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontFamily: 'BowlbyOneSC',
    width: '80%',
    margin: '0 auto'


   };
  return (
    <div style={navBarAddStyles}>
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#">⚡️BREWS⚡️</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mr-auto">
        <NavDropdown title="FEATURES" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">KING OF THE ROAD</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="SHOP" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link to="/boards">BOARDS</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="VIDEO" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link to="/Video">HALL OF MEAT</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="MAGAZINE" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">SUBSCRIBE</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">CONTEST</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="MORE..." id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">SKETCHY SHIT</NavDropdown.Item>
        </NavDropdown>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar;
