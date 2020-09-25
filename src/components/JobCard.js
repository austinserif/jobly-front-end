//libraries
import React from 'react';

//styles
import '../styles/JobCard.css'

const JobCard = ({id, title, salary, equity, state}) => {
    return (
        <div className="JobCard card" id={id}>
            <div className="card-section">
                <h2 className="JobCard-title card-item-left">{title}</h2>
            </div>
            <div className="card-section">
                <h4 className="JobCard-salary card-item-left">Salary: ${salary}</h4>
            </div>
            <div className="card-section">
                <h4 className="JobCard-equity card-item-left">Equity: {100 * equity}%</h4>
            </div>
            <div className="card-section">
                <button className="JobCard-application-button card-item-left" type="button">{(state ? `Applied` : `Apply`)}</button>
            </div>
        </div>
    );
}

export default JobCard;