import { useState, useEffect } from 'react';

const useFormCompletion = (fieldValues, requiredFields=null) => {

    const [ allFieldsCompleted, setAllFieldsCompleted ] = useState(false);

    useEffect(() => {
        const updateFieldCompletion = () => {
            if (requiredFields) {
                for (let field of Object.entries(fieldValues)) {
                    if (!field[1].length && Object.keys(requiredFields).includes(field[0])) {
                        setAllFieldsCompleted(false);
                        return;
                    }
                }
            } else {
                for (let field of Object.values(fieldValues)) {
                    if (!field.length) {
                        setAllFieldsCompleted(false);
                        return;
                    }
                }
            }
            return setAllFieldsCompleted(true);
        }
        updateFieldCompletion();
    }, [fieldValues]);
    return allFieldsCompleted;
}

export default useFormCompletion;