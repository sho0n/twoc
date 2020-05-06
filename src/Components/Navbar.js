import React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navBarContainer'>
            <Router>
                
                <Link>Home</Link>
                <Link>Post</Link>
                <Link>Ads</Link>

            </Router>
        </div>
    )
}
export default Navbar;