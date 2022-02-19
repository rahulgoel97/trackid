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

function Home() {




  return (
    <div className="App">
        
          
      <NavbarComponent />
      <VideoCardGrid initSearchState={0}/>
      
    </div>
  );
}

export default Home;
