//libraries
import React from 'react';

//styles
import '../styles/Jobs.css';

/** Jobs company renders a list of JobCard components, and a search bar. If component is
 * rendered from GET /jobs, then all job opennings from all companies will be listed. If 
 * instead the component is rendered via GET /companies/:company, then Jobs will use useParams
 * to get the company handle passed as a url param and list of all the job opennings associated
 * with that company.
 * */
const Jobs = () => {

    //if valid "handle" key can be destructured from useParams
    
        //call API with handle
        //render results

    //else

        //call API for all listings
        //render results
     
    return (
        <div className="Jobs">
            This is the jobs listing!
        </div>
    )
}