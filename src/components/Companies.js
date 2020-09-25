//libraries
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import useLoading from '../hooks/useLoading';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';

//styles
import '../styles/Companies.css';


const Companies = () => {

    const [ search, setSearch ] = useState('');

    const [ callback, args ] = [JoblyApi.getCompanies, [search]];
    
    const [ responseData, isLoading ] = useLoading(search, callback, args);

    if (isLoading) {
        return (
            <div>
                Your companies are loading!
            </div>
        )
    }

    console.log(responseData);

    return (
        <div className="Companies">
            <div>
                <SearchBar callback={setSearch}/>
            </div>
            <div className="CompaniesList">
                {responseData.map(c => (<CompanyCard key={uuid()} handle={c.handle} name={c.name} num_employees={c.num_employees} description={c.description} logo_url={c.logo_url}/>))}
            </div>
            
        </div>
    );
}

export default Companies;