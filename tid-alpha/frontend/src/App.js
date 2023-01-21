import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home.js'
import HomeTracks from './HomeTracks.js'
import Feedback from './Feedback.js'
import Mission from './Mission.js'
import Landing from './Landing.js'
import Set from './Set.js';
import Register from './RegisterPage.js';
import Login from './Login.js';
import Welcome from './Welcome.js';
import { AuthProvider } from './contexts/Auth';
 
function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
      	<Routes>
                <Route path="/home-sets" element={<Home/>} />
                <Route path="/home-tracks" element={<HomeTracks/>} />
  	          	<Route path="/home" element={<Home/>} />
  	          	<Route path="/search" element={<Home/>} />
  	          	<Route path="/feedback" element={<Feedback/>} />
  	          	<Route path="/about" element={<Mission/>} />
                <Route path="/welcome" element={<Welcome/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/set/:link" element={<Set/>} />
  	          	<Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
   
    </div>
  );
}

export default App;
