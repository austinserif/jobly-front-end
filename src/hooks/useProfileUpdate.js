import { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

const useProfileUpdate = (fields, username) => {
    
    const [ responseData, setResponseData ] = useState(null);

    const [ errors, setErrors ] = useState(null);

    const handleProfileUpdate = async (fields) => {
        try {
            const completedFields = Object.values(fields).map(f => {
                if (f[0].length) {
                    return f;
                }
            });

            const res = await JoblyApi.updateUser(completedFields, username);
            setResponseData(res);

        } catch(err) {

            setErrors(err);

        }
    };
    return [ responseData, errors, handleProfileUpdate ];
}

export default useProfileUpdate;