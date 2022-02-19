import './App.css';
import{ useState } from 'react';
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
import NavbarComponent from './components/Navbar.js';
import VideoCardGrid from './components/videoCardGrid.js'

function HomeTracks() {




  return (
    <div className="App">
        
          
      <NavbarComponent />
      <VideoCardGrid initSearchState={1} />
      
    </div>
  );
}

export default HomeTracks;
