//libraries
import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

//components
import JobCard from '../components/JobCard';

//styles
import '../styles/Jobs.css';
import JoblyApi from '../api/JoblyApi';
import useLoading from '../hooks/useLoading';
import LoadingIcon from '../components/LoadingIcon';

/** Company company renders a list of JobCard components, and a search bar. If component is
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
const Company = () => {
    //get handle from URL parmams
    const { handle } = useParams();

    //set callback and args. getCompany takes one parameter: handle (string)
    const [ callback, args ] = [JoblyApi.getCompany, [handle]];

    //call useLoading
    const [ responseData, isLoading ] = useLoading(callback, args);

    if (isLoading) {
        return (
            <div>
                <LoadingIcon/>
            </div>
        );
    }

    const { name, description, jobs} = responseData;
    return (
        <div className="Company">

            <div className="CompanyProfile">
                <div>
                    <h2>{name}</h2>
                </div>

                <div>
                    <p>
                        {description}
                    </p>
                </div>

            </div>

            <div className="JobsList">
                {jobs.map(d => (<JobCard id={d.id} key={uuid()} title={d.title} company_handle={d.company_handle} salary={d.salary} equity={d.equity} state={d.state}/>))}
            </div>
            
        </div>
    );
}

export default Company;