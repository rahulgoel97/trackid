
import React, { useState } from 'react';
import navlogo from './trackid_logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);





  return (
    <div className="navBarDiv">
      <Navbar color="#222222" dark expand="md" fixed="top">

       <NavLink href="#landing"> <img 
        							class = "navbar-logo" 
        							src = {navlogo}/></NavLink>

        <NavbarToggler onClick={toggle} />


        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>


           <NavItem className="nav-item">
              <NavLink href="#home">Sets</NavLink>
            </NavItem>
            
            

            <NavItem className="nav-item">
              <NavLink href="#about">About</NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="#feedback">Feedback</NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="#register">Register</NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="#login">Login</NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="https://medium.com/@goel.labs">Engineering Blog</NavLink>
            </NavItem>

            
            
        
          </Nav>
          
        </Collapse>
      </Navbar>

    </div>
  );
}

export default NavbarComponent;
