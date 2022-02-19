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


function Landing() {




  return (
    <div className="App">
        
      
      <NavbarComponent />
      
     
      <div className="landing-contents">

          <p className="greeting-logo"> trackid </p>

          <p className="greeting-text"> Find & Celebrate Dance Music </p>

          <div className="search-options-div">
          
          <NavLink href="#home-sets">
            <div className="left-div"> 

                  <p className="search-option-header"> Search sets </p> 

                  <p className="search-option-text"> Search sets by DJ name or set name </p>

            </div>
          </NavLink>
          
            <NavLink href="#home-tracks">
              <div className="right-div"> 

                    <p className="search-option-header"> Search tracks</p> 

                    <p className="search-option-text"> Search by detected artists & tracks within DJ sets</p>


              </div>
            </NavLink>

          </div>

    </div>
  </div>
  );
}

export default Landing;
