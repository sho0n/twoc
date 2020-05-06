import React from 'react';
import './App.css';
import Home from './Home';
import Post from './Post';
import Ads from './Ads';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="navBarContainer">

<Router>
                
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to ="/ads">Ads</Link>

                <Route exact path="/home" component={Home} />
                <Route path="/post" component={Post} />
                <Route path="/ads" component={Ads} />
            </Router>

    </div>
  );
}

export default App;
