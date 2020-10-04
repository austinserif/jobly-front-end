//libraries
import React, { useEffect } from 'react';

//styles
import '../styles/Home.css';
import Illustration from '../flame-788.svg';
import JoblyApi from '../api/JoblyApi';

const Home = ({ userToken, userData, isLoading, setUserData, toggleIsLoading }) => {

    useEffect(() => { 
        const forceLoadUserData = async () => {
            toggleIsLoading();
            const response = await JoblyApi.getCurrentUserData();
            setUserData(response);
            toggleIsLoading();
            return;
        }        
        if (userToken && !userData && !isLoading) {
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
            </div>
            <div className="section">
                <img alt="" id="illustration" width="300px" src={Illustration}/>
            </div>
        </div>
    );
}

export default Home;