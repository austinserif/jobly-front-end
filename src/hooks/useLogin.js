import { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

const useLogin = () => {
    const [ responseData, setResponseData ] = useState(null);
    const [ errors, setErrors ] = useState(null);
    
    const handleLogin = async (username, password) => {
        try {
            const res = await JoblyApi.login(username, password);
            setResponseData(res);
        } catch(err) {
            setErrors(err);
        }
    };
    return [ responseData, errors, handleLogin ];
}

export default useLogin;