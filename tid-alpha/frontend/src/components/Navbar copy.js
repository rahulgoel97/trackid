
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
              <NavLink href="/components/">Latest</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/components/">Trending</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="https://github.com/reactstrap/reactstrap">Search</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Profile
              </DropdownToggle >
              <DropdownMenu right id="white-background">
                <DropdownItem style={{
                        backgroundColor: "rgba(256, 256, 256, 1)",
                      }}>
                  Login
                </DropdownItem>
                <DropdownItem style={{
                        backgroundColor: "rgba(256, 256, 256, 1)",
                      }}>
                  Register
                </DropdownItem>
                <DropdownItem style={{
                        backgroundColor: "rgba(256, 256, 256, 1)",
                      }}>
                  About
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="nav-item">
              <NavLink href="/components/">@goelthe</NavLink>
                          </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>

    </div>
  );
}

export default NavbarComponent;
