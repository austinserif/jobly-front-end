import { useState } from 'react';

const useSubmitApplication = (initial) => {

    const [state, setState] = useState(initial);
    const [status, setStatus] = useState('Apply');

    const submitApplication = () => {
        setStatus('Submitting...');        
        console.log('submitting application!');
        setTimeout(() => {
            setState(true);
        }, 3000);
    }

    return [state, status, submitApplication];
}

export default useSubmitApplication;