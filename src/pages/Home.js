//libraries
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/Home.css';
import Illustration from '../flame-788.svg';
import JoblyApi from '../api/JoblyApi';

const Home = ({ userToken, userData, isLoading, setUserData, toggleIsLoading }) => {

    useEffect(() => { 

        const forceLoadUserData = async () => {
            const response = await JoblyApi.getCurrentUserData();
            setUserData(response);
        }

        if (userToken && !Object.keys(userData).length && !isLoading) {
            forceLoadUserData();
        }

    }, [userToken, userData, isLoading, setUserData, toggleIsLoading]);

    return (
        <div className="Home">
            <div className="section">
                <h1>
                    Welcome to Jobly!
                </h1>
                <h3>
                    A cross-roads of unconventional paths
                </h3>
                <div id="home-page-description">
                    {
                        !userToken ? (<Link to="/login"><button id="home-login-button">Login</button></Link>) : <p>To browse available jobs for all companies, navigate to the <b>jobs</b> tab under the drop-down menu. For <u>jobs by
                        company</u>, access the company directory by selecting the <b>Comapnies</b> tab and then the company you would like to
                        view. Finally, to view or edit profile details, select the <b>Profile</b> tab from the drop-down.</p>
                    }
                </div>
                
                <p></p>
            </div>
            <div className="section">
                <img alt="" id="illustration" width="300px" src={Illustration}/>
            </div>
        </div>
    );
}

export default Home;