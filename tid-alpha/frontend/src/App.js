import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Home.js'
import HomeTracks from './HomeTracks.js'
import Feedback from './Feedback.js'
import Mission from './Mission.js'
import Landing from './Landing.js'
import Set from './Set.js'

function App() {
  return (
    <div className="App">
    
    	<HashRouter basename={process.env.PUBLIC_URL}>
    		<Switch>
              <Route path="/home-sets" exact component={Home} />
              <Route path="/home-tracks" exact component={HomeTracks} />
	          	<Route path="/home" exact component={Home} />
	          	<Route path="/search" exact component={Home} />
	          	<Route path="/feedback" exact component={Feedback} />s
	          	<Route path="/about" exact component={Mission} />
              <Route path="/set/:link" exact component={Set} />
	          	<Route path="/" exact component={Landing} />
         	</Switch>
        </HashRouter>
   
    </div>
  );
}

export default App;
