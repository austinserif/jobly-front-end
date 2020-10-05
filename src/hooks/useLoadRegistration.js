import { useState, useContext } from 'react';
import JoblyApi from '../api/JoblyApi';
import CurrentUserContext from '../CurrentUserContext';

const useLoadRegistration = () => {

    const [ responseData, setResponseData ] = useState(null);

    const [ errors, setErrors ] = useState(null);

    const { setUserToken, handleLoadUserData } = useContext(CurrentUserContext);

    // const handleRegistration = async (fields) => {
        
    //     try {
    //         const completedFields = Object.entries(fields).map(f => (f[0].length ? f : null));

    //         const res = await JoblyApi.register(completedFields);

    //         setResponseData(res);

    //     } catch(err) {

    //         setErrors(err);

    //     }
    // };

    // const { }

    /** handle registration and login sequence */
    const handleRegistration = async (fields) => {
        try {
            //submit sign-up form fields
            const userToken = await JoblyApi.register(fields);

            //set the jwt for the new user into local Storage
            localStorage.setItem('userToken', userToken);

            /** pass new localStorage.userToken value to setUserToken. This is an important step for a couple reasons.
            // 1. passing localStorage.userToken instead of userToken ensures that local storage remains the single source of truth
            // 2. updating the value of userToken will trigger re-renders on dependent components */
            setUserToken(() => (localStorage.userToken));

            await handleLoadUserData();

            setResponseData(userToken)

        } catch (err) {
            
            setErrors(err);
        }
    }
    return [ responseData, errors, handleRegistration ];
}

export default useLoadRegistration;