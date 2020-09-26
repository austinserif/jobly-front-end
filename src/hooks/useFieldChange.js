import { useState } from 'react';

/** useFieldChange is a custom hook containing logic for handling changes
 * to form input fields.
 */
const useFieldChange = (initial) => {
    const [ values, setValues ] = useState(initial);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value });
    }

    const resetValues = () => {
        setValues(initial);
    }

    return [ values, handleChange, resetValues];
}

export default useFieldChange;