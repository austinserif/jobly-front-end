import { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

const useSubmitApplication = (initial, jobId) => {

    const [state, setState] = useState(initial);
    const [status, setStatus] = useState('Apply');

    const submitApplication = async () => {
        setStatus('Submitting...');
        const response = await JoblyApi.applyForJob(jobId);
        console.log(response);
        setTimeout(() => {
            setState(true);
        }, 2000);
    }

    return [state, status, submitApplication];
}

export default useSubmitApplication;