import './App.css';

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

function Search() {
  return (
    <div className="App">
        
          <NavbarComponent />
       
        

        <div className="setCardGrid">  
          <h1> test </h1>
        </div>

        <div class="laser-beam red"></div>
        


       
        
   
    </div>
  );
}

export default Search;
