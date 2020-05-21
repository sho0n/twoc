import React, { Component }from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render(){
        return(
            
			  
					<div className="navBarContainer">
			        
				        <div className="linkscontainer">
					        <div className='link'><Link to="/">Home</Link></div>
					        <div className='link'><Link to="/post">Post</Link></div>
					        <div className='link'><Link to="/ads">Ads</Link></div>
				        </div>
					
						</div>
					
					
			
               
        )
    }
}
export default Navbar;