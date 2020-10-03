import { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';

/** 
 * Manages all logic related to user data and token storage. It returns 
 * [ userToken, userData, isLoading, toggleIsLoading, handleLogout, handleEditProfile, handleLogin ]. 
 * */
const useCurrentUser = () => {

    const [ userToken, setUserToken ] = useState(localStorage.userToken);
    const [ userData, setUserData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const initialLoad = async () => {
            const response = await JoblyApi.getCurrentUserData();
            setUserData(response);
            setIsLoading(false);
        }

        if (userToken) {
            initialLoad();
        }
    // eslint-disable-next-line
    }, []);

    const toggleIsLoading = () => (setIsLoading(!isLoading));

    /** handle logout sequence. clears userToken from localStorage and React state.
     * Finally clears any userData in state.*/
    const handleLogout = () => {
        //remove userToken from localStorage
        delete localStorage.userToken;

        //clear userToken and userData from state
        setUserToken(() => (''));
        setUserData(() => ({}));
    }

    /** handle login sequence */
    const handleLogin = async (username, password) => {
        try {
            //use credentials to get user token
            const userToken = await JoblyApi.login(username, password);

            //set the jwt for the new user into local Storage
            localStorage.setItem('userToken', userToken);

            /** pass new localStorage.userToken value to setUserToken. This is an important step for a couple reasons.
            // 1. passing localStorage.userToken instead of userToken ensures that local storage remains the single source of truth
            // 2. updating the value of userToken will trigger re-renders on dependent components */
            setUserToken(() => (localStorage.userToken));
        } catch (err) {
            console.error(err);
        }
    }

    /** handle submission of profile edits */
    const handleEditProfile = async (fields, username) => {
        try {
            // turn on loading screen
            setIsLoading(true);

            //send form to backend
            const response = await JoblyApi.updateUserData(fields, username);
            console.log(response);

            //load response into state
            setUserData(response);

            //turn off loading screen
            setIsLoading(false);
        } catch (err) {
            //read-out error
            console.error(err);

            //turn loading screen off incase error
            setIsLoading(false);
        }
    }

    return [ userToken, userData, isLoading, toggleIsLoading, handleLogout, handleEditProfile, handleLogin ]
}

export default useCurrentUser;