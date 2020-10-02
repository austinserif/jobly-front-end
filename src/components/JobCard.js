//libraries
import React from 'react';

//styles
import '../styles/JobCard.css'
import useSubmitApplication from '../hooks/useSubmitApplication';

const JobCard = ({id, title, salary, equity, state}) => {

    const [ application, status, submitApplication ] = useSubmitApplication(state, id);

    return (
        <div className="JobCard card" id={id}>
            <div className="card-section bottom-border">
                <h2 className="JobCard-title card-item-left">{title}</h2>
            </div>
            <div className="card-section">
                <h4 className="JobCard-salary card-item-left">Salary: ${salary}</h4>
            </div>
            <div className="card-section">
                <h4 className="JobCard-equity card-item-left">Equity: {100 * equity}%</h4>
            </div>
            <div className="card-section">
                {
                    application ? (<button className='JobCard-application-button card-item-left applied' disabled type="button">Applied</button>) : ((<button className='JobCard-application-button card-item-left' onClick={submitApplication} type="button">{status}</button>))
                }
            </div>
        </div>
    );
}

export default JobCard;