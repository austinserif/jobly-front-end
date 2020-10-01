import { useState } from 'react';

const useInputChange = (initial) => {

    const [values, setValues]= useState(initial);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({...values, [name]: value});
    }
    
    const resetValues = () => {
        setValues(initial);
    }

    const feedNewValues = (vals) => {
        setValues(vals)
    }
    
    return [ values, handleChange, resetValues, feedNewValues ];
}

export default useInputChange;