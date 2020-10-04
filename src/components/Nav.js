//libraries
import React, { useRef } from 'react';
import useToggle from '../hooks/useToggle';

//components
import { Link } from 'react-router-dom';
import JoblyLogo from '../jobly-logo.svg';
import { HamburgerBoring } from 'react-animated-burgers';

//styles 
import '../styles/Nav.css';


const Nav = ({userToken, handleLogout}) => {

    //set isActive vairable into state to keep track of side nav status
    const [ isActive, toggleButton ] = useToggle(false);

    //register dropDown and dropDownBox elements into reference using 
    const dropDown = useRef();
    const dropDownBox = useRef();

    if (userToken) {
        return (
            <div className="Nav">
                <Link id="home-link" className="Nav-link" to="/" onClick={(isActive ? (() => toggleButton()) : null)}><img alt="" src={JoblyLogo} width='50px'/></Link>
                <div className="Nav-drop-down" ref={dropDownBox}>
                    <div>
                        <HamburgerBoring id="hamburger-menu" className="Nav-link" buttonWidth={30} isActive={isActive} toggleButton={toggleButton}/>
                    </div>
                    <div className={isActive ? "menu active" : "menu hidden"}ref={dropDown}>
                        <div>
                            <Link className="Nav-link" to="/companies" onClick={(isActive ? (() => toggleButton()) : null)}><h4>Companies</h4></Link>                    
                        </div>                        
                        <div>
                            <Link className="Nav-link" to="/jobs" onClick={(isActive ? (() => toggleButton()) : null)}><h4>Jobs</h4></Link>                    
                        </div>
                        <div>
                            <Link className="Nav-link" to="/profile" onClick={(isActive ? (() => toggleButton()) : null)}><h4>Profile</h4></Link>                    
                        </div>
                        <div>
                            <Link className="Nav-link" onClick={handleLogout} to="/"><h4>Logout</h4></Link>                    
                        </div>
                    </div>
                </div>              
            </div>
        );
    }

    return (
        <div className="Nav">
            <Link id="home-link" className="Nav-link" to="/"><img alt="" src={JoblyLogo} width='50px'/></Link>            
            <Link className="Nav-link" to="/login"><h4>Login</h4></Link>
        </div>
    );
}

export default Nav;