
import React, { useState } from 'react';
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

        <NavbarBrand href="/"><img 
        							class = "navbar-logo" 
        							src = "./trackid_logo.png"/></NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           <NavItem className="nav-item">
              <NavLink href="#home">Sets</NavLink>
            </NavItem>
            
            

            <NavItem className="nav-item">
              <NavLink href="#about">About (Coming Soon)</NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="#about">Feedback (Coming Soon)</NavLink>
            </NavItem>

            
            
        
          </Nav>
          
        </Collapse>
      </Navbar>

    </div>
  );
}

export default NavbarComponent;
