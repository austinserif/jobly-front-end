//libraries
import React from 'react';

//styles
import '../styles/Home.css';
import Illustration from '../flame-788.svg';

const Home = () => {
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