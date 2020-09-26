//libraries
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import useLoading from '../hooks/useLoading';
import { v4 as uuid } from 'uuid';
import SearchBar from '../components/SearchBar';
import CompanyCard from '../components/CompanyCard';

//styles
import '../styles/Companies.css';
import LoadingIcon from '../components/LoadingIcon';


const Companies = () => {

    const [ search, setSearch ] = useState('');

    const [ callback, args ] = [JoblyApi.getCompanies, [search]];
    
    const [ responseData, isLoading ] = useLoading(callback, args, search);

    if (isLoading) {
        return (
            <div>
                <LoadingIcon/>
            </div>
        );
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