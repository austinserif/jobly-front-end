//libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

//components
import JobCard from './JobCard';
import SearchBar from './SearchBar';

//styles
import '../styles/Jobs.css';
import JoblyApi from '../api/JoblyApi';
import useLoading from '../hooks/useLoading';

/** Jobs company renders a list of JobCard components, and a search bar. If component is
 * rendered from GET /jobs, then all job opennings from all companies will be listed. If 
 * instead the component is rendered via GET /companies/:handle, then Jobs will use useParams
 * to get the company handle passed as a url param and list of all the job opennings associated
 * with that company.
 * */
const Jobs = () => {
    //get handle from URL parmams
    const { handle } = useParams();

    const [search, setSearch] = useState('');

    //set callback and args. getJobs takes one optional parameter, handle
    const [ callback, args ] = (!handle ? [JoblyApi.getJobs, [search]] : [JoblyApi.getCompany, [handle]]);

    console.log(callback);

    //call useLoading
    const [ responseData, isLoading ] = useLoading(search, callback, args);

    if (isLoading) {
        return (
            <div>
                Your Jobs are Loading!
            </div>
        );
    }
     
    return (
        <div className="Jobs">
            <div className="search-bar-container">
                <SearchBar callback={setSearch}/>
            </div>
            <div className="JobsList">
                {responseData.map(d => (<JobCard id={d.id} key={uuid()} title={d.title} company_handle={d.company_handle} salary={d.salary} equity={d.equity} state={d.state}/>))}
            </div>
            
        </div>
    );
}

export default Jobs;