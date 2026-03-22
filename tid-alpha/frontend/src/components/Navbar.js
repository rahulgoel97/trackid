
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
import logo from '../trackid_logo.png';

const NavbarComponent = (props) => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);





  return (
    <div className="navBarDiv">
      <Navbar color="#222222" dark expand="md">

        <NavbarBrand href="/"><img 
        className="navbar-logo" 
        src={logo}/></NavbarBrand>

        
          
       
      </Navbar>

    </div>
  );
}

export default NavbarComponent;
