import { useState, useEffect } from 'react';

/** useLoading is a hook that takes a callback function and an optional args array as parameters,
 * and returns an array with two elements: [ responseData, isLoading ].
 * 
 * responseData and isLoading have initial values of {} and true, respectively. Once the callback function
 * passed into useLoading has resolved its promise, responseData will be set to the returned value, and finally
 * isLoading will be set to false.
 * 
 */
const useLoading = (callback, args=[], search=null) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ responseData, setResponseData ] = useState({});

    useEffect(()=> {
        const getResponseData = async (callback, args=[]) => {
            if (!args.length) {
                const response = await callback();
                setResponseData(response); 
            } else {
                const response = await callback(...args);
                setResponseData(response);
            }
            setInterval(()=> {
                setIsLoading(false);
            }, 1000);
            
        }
        getResponseData(callback, args); 
    }, [search]);
    return [ responseData, isLoading ];
}

export default useLoading;