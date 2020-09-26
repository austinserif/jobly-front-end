//libraries
import React from 'react';

//components
import { Link } from 'react-router-dom';
import JoblyLogo from '../jobly-logo.svg';

//styles 
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className="Nav">
            <Link id="home-link" className="Nav-link" to="/"><img alt="" src={JoblyLogo} width='50px'/></Link>
            <Link className="Nav-link" to="/profile"><h4>Profile</h4></Link>
            <Link className="Nav-link" to="/companies"><h4>Companies</h4></Link>
            <Link className="Nav-link" to="/jobs"><h4>Jobs</h4></Link>
        </div>
    );
}

export default Nav;