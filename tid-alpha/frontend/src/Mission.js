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
       
             <div className="landing-contents">

                <p className="greeting-logo"> trackid </p>

                <p className="greeting-text"> Find & Celebrate Dance Music </p>


            

                <p className="about-title"> About</p>

                <p className="about-text"> trackid curates dance music to help fans discover new artists that may be under the radar </p>



                <p className="about-title"> Find artists</p>

                <p className="about-text"> Search your favourite tracks to find new artists that fit your vibe </p>


                <p className="about-title"> Acknowledgements</p>

                <p className="about-text"> This project would not have been possible without the open source community (including Supabase). Thanks to Deniz Parmaksiz, Dimitris Goulimaris, Francisco Gumucio and Deniz Turkoglu for their feedback </p>
            </div>
        
   
    </div>
  );
}

export default Search;
