//libraries
import React from 'react';

//components
import { Link } from 'react-router-dom';

//styles
import '../styles/CompanyCard.css'

const CompanyCard = ({handle, name, num_employees, description, logo_url}) => {
    return (
        <Link className="CompanyCard card" id={handle} to={`/${handle}`}>
            <div className="card-section">
                <h2 className="CompanyCard-name card-item-left">{name}</h2>
            </div>
            <div className="card-section">
                <h4 className="CompanyCard-num-employees card-item-left"># of Employees: {num_employees}</h4>
            </div>
            <div className="card-section">
                <p className="CompanyCard-description card-item-left">{description}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;