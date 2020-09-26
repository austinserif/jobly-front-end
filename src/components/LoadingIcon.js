import React from 'react';

import Logo from '../jobly-logo.svg';

import '../styles/LoadingIcon.css';

const LoadingIcon = () => {
    return (
        <div className="LoadingIcon">
            <img className="App-logo" alt="" src={Logo} width="15%"/>
        </div>
    );
}

export default LoadingIcon;