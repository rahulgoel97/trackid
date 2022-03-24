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


       <div className="landing-contents">

                <p className="greeting-logo"> trackid </p>

                <p className="greeting-text"> Find & Celebrate Dance Music </p>


            

                <p className="about-title"> Feedback</p>

                <p className="about-text"> If you have any feedback, I'd love to hear from you at rahulgol97@gmail.com </p>



            </div>    
        
   
    </div>
  );
}

export default Feedback;
