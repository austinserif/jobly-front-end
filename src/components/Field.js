import React from 'react';

/** Generalized input field component. Renders an input element and its label.
 * 
 * props: name (string), value (any), handleChange (callback fn), placeholder (string), type (string, default="text")
 * 
*/
const Field = ({ name, value, handleChange, placeholder, type='text'}) => {
    return (
        <div className="Field">
            <div>
                <label htmlFor={name}>{name}</label>
            </div>
            <div>
                <input type={type} id={name} placeholder={placeholder} value={value} name={name} onChange={handleChange}/>              
            </div>
        </div>
    );
}

export default Field;