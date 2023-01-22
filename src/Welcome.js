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

function Welcome() {
  return (
    <div className="App">
        
          <NavbarComponent />
       
             <div className="landing-contents">

                <p className="greeting-logo"> trackid </p>

                <p className="greeting-text"> Find & Celebrate Dance Music </p>


            

                <p className="about-title"> Welcome to trackid</p>

                <p className="about-text"> Hey there! Thank you for signing up for track-id. Right now, there aren't any special features for registered users. However, in the future, you will be able to 1) save newly discovered boiler rooms, 2) share your favourite boiler rooms with friends in a seamless way. Lastly, you will get access to some cool data to help find new artists. </p>



              
            </div>
        
   
    </div>
  );
}

export default Welcome;
