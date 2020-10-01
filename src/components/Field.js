import React from 'react';

import '../styles/Field.css';

/** Generalized input field component. Renders an input element and its label.
 * 
 * props: name (string), value (any), handleChange (callback fn), placeholder (string), type (string, default="text")
 * 
*/
const Field = ({ disabled, required, name, value, handleChange, placeholder, type='text'}) => {
    return (
        <>
            <input required={required ? true : false} className={`Field-field ${required ? 'required' : ''}`} alt="" type={type} id={name} placeholder={placeholder} value={value} name={name} onChange={handleChange} disabled={disabled}/>       
        </>
    );
}

export default Field;