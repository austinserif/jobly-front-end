//libraries
import React from 'react';

//components
import { Link } from 'react-router-dom';

//styles
import '../styles/CompanyCard.css'

const CompanyCard = ({handle, name, num_employees, description}) => {
    console.log(num_employees)
    return (
        <Link className="CompanyCard card" id={handle} to={`companies/${handle}`}>
            <div className="card-section bottom-border">
                <h2 className="CompanyCard-name card-item-left">{name}</h2>
            </div>
            <div className="card-section">
                <p className="CompanyCard-description card-item-left">{description}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;