import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class Navbar extends Component {
    render(){
        return(
            
			    <Router>
					<div className="navBarContainer">
			        <Switch>
				        <div className="linkscontainer">
					        <div className='link'><Link to="/home">Home</Link></div>
					        <div className='link'><Link to="/post">Post</Link></div>
					        <div className='link'><Link to="/ads">Ads</Link></div>
				        </div>
						</Switch>
						</div>
					
					
				</Router>
               
        )
    }
}
export default Navbar;