import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/** useLoading is a hook that takes a callback function and an optional args array as parameters,
 * and returns an array with two elements: [ responseData, isLoading ].
 * 
 * responseData and isLoading have initial values of {} and true, respectively. Once the callback function
 * passed into useLoading has resolved its promise, responseData will be set to the returned value, and finally
 * isLoading will be set to false.
 */
const useUpdateUser = (callback, args=[]) => {
    const [ isLoading, setIsLoading ] = useState(loading);
    const [ responseData, setResponseData ] = useState(fields);
    const history = useHistory();

    useEffect(()=> {

        /** params: callback (callback fn), args (array)
         * 
         * Pass args into callback if present. Usually `callback` is a
         * wrapper for API calls (thus async), and will return a Promise. Once 
         * the promise is resolved, `responseData` is updated in state, and isLoading
         * is set to false.
        */
        const getResponseData = async (callback, args=[]) => {
            
            //reset isLoading to true if was false
            setIsLoading(true);

            try {
                if (!args.length) {
                    const response = await callback();
                    setResponseData(response); 
                } else {
                    const response = await callback(...args);
                    setResponseData(response);
                }

                //update isLoading value in state to trigger re-render
                setIsLoading(false);

            } catch (err) {
                history.push('/profile')
            }
        }
        getResponseData(callback, args); 
        
        // eslint-disable-next-line
    }, [search]);
    
    return [ responseData, isLoading ];
}

export default useUpdateUser;