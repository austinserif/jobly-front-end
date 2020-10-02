import React, { useContext } from 'react';
import CurrentUserContext from '../CurrentUserContext';
import '../styles/Banner.css';

const Banner = ({message}) => {
    const { setBanner } = useContext(CurrentUserContext);
    return (
        <div className="Banner">
            <div className="DeleteBannerButton" style={{cursor: 'pointer'}} onClick={() => (setBanner(null))}>x</div>
            <div className="BannerMessage">{message}</div>
        </div>
    );
}

export default Banner;