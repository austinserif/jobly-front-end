//libraries
import { useState } from 'react';

const useSearch = (initial="") => {
    const [ value, setValue ] = useState(initial);

    const handleChange = (e) => {
        return setValue(e.target.value);
    }
    const resetInput = () => setValue('');

    return [ value, handleChange, resetInput ];
}

export default useSearch;