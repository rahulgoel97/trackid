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

function Feedback() {
  return (
    <div className="App">
    
        
          <NavbarComponent />


       <h1> You can provide feedback at rahulgol97@gmail.com </h1>

        <div class="laser-beam red"></div>
        


       
        
   
    </div>
  );
}

export default Feedback;
