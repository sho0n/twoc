import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Ads from './Ads';
class Navbar extends Component {
    render(){
        return(
            <div className="navBarContainer">
			    <Router>
			        <Switch>
				        <div className="linkscontainer">
					        <div className='link'><Link to="/home">Home</Link></div>
					        <div className='link'><Link to="/post">Post</Link></div>
					        <div className='link'><Link to="/ads">Ads</Link></div>
				        </div>
						</Switch>
					
					<Route exact path="/home" component={Home} />
		        	<Route path="/post" component={Post} />
		        	<Route path="/ads" component={Ads} />
					
				</Router>
               </div>
        )
    }
}
export default Navbar;