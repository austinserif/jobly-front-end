import { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

const useLoadRegistration = () => {

    const [ responseData, setResponseData ] = useState(null);

    const [ errors, setErrors ] = useState(null);

    const handleRegistration = async (fields) => {
        try {
            const completedFields = Object.entries(fields).map(f => (f[0].length ? f : null));

            const res = await JoblyApi.register(completedFields);
            setResponseData(res);

        } catch(err) {

            setErrors(err);

        }
    };
    return [ responseData, errors, handleRegistration ];
}

export default useLoadRegistration;