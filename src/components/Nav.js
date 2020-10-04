//libraries
import React, { useRef, useEffect } from 'react';

//components
import { Link } from 'react-router-dom';
import JoblyLogo from '../jobly-logo.svg';
import { HamburgerCollapseReverse } from 'react-animated-burgers';

//styles 
import '../styles/Nav.css';
import useToggle from '../hooks/useToggle';

const Nav = ({userToken, handleLogout}) => {

    //set isActive vairable into state to keep track of side nav status
    const [ isActive, toggleButton ] = useToggle();

    //register dropDown and dropDownBox elements into reference using 
    const dropDown = useRef();
    const dropDownBox = useRef();

    useEffect(()=> {
        const toggleSideMenu = () => {
            (dropDown.current.className === 'menu active') ? (dropDown.current.className = 'menu hidden') : (dropDown.current.className = 'menu active');
            console.log(dropDown.current.className);
        }
        toggleSideMenu();
    }, [isActive]);

    if (userToken) {
        return (
            <div className="Nav">
                <Link id="home-link" className="Nav-link" to="/"><img alt="" src={JoblyLogo} width='50px'/></Link>
                <div className="Nav-drop-down" ref={dropDownBox}>
                    <div>
                        <HamburgerCollapseReverse id="hamburger-menu" className="Nav-link" buttonWidth={30} isActive={isActive} toggleButton={toggleButton}/>
                    </div>
                    <div className="menu active" ref={dropDown}>
                        <div>
                            <Link className="Nav-link" to="/companies"><h4>Companies</h4></Link>                    
                        </div>                        
                        <div>
                            <Link className="Nav-link" to="/jobs"><h4>Jobs</h4></Link>                    
                        </div>
                        <div>
                            <Link className="Nav-link" to="/profile"><h4>Profile</h4></Link>                    
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