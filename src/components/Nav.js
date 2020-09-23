//libraries
import React from 'react';

//components
import { Link } from 'react-router-dom';

//styles 
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className="Nav">
            <Link id="home-link" className="Nav-link" to="/">Jobly</Link>
            <Link className="Nav-link" to="/profile">Profile</Link>
            <Link className="Nav-link" to="/companies">Companies</Link>
            <Link className="Nav-link" to="/jobs">Jobs</Link>  

        </div>
    );
}

export default Nav;