//libraries
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

//components
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

//styles
import '../styles/Jobs.css';
import JoblyApi from '../api/JoblyApi';
import useLoading from '../hooks/useLoading';
import LoadingIcon from '../components/LoadingIcon';

/** Jobs company renders a list of JobCard components, and a search bar. If component is
 * rendered from GET /jobs, then all job opennings from all companies will be listed. If 
 * instead the component is rendered via GET /companies/:handle, then Jobs will use useParams
 * to get the company handle passed as a url param and list of all the job opennings associated
 * with that company.
 * 
 * Jobs takes an optional boolean prop, `all`. If no props are passed to Jobs, then all is set to true by
 * default, and thus the component is signaled to render a list of ALL the jobs. In order to signal that
 * the component should render just the jobs for a single company, then all=false should be passed in. Otherwise
 * the Component won't know to get the URL param handle, and pass it into AJAX/API hook.
 * */
const Jobs = () => {

    const [search, setSearch] = useState('');

    //set callback and args. getJobs takes one optional parameter, handle
    const [ callback, args ] = [JoblyApi.getJobs, [search]];

    //call useLoading
    const [ responseData, isLoading ] = useLoading(callback, args, search);

    if (isLoading) {
        return (
            <div>
                <LoadingIcon/>
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