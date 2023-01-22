import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";

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
      <HashRouter>
        <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/home-sets" exact component={Home} />
                <Route path="/home-tracks" exact component={HomeTracks} />
                <Route path="/home" exact component={Home} />
                <Route path="/search" exact component={Home} />
                <Route path="/feedback" exact component={Feedback} />
                <Route path="/about" exact component={Mission} />
                <Route path="/welcome" exact component={Welcome} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/set/:link" exact component={Set} />
                <Route path="/trackid" exact component={Landing} />
                <Route path="*" exact component={Landing} />
        </Switch>
      </HashRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
