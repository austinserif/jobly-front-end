import React from 'react';
import useSearch from '../hooks/useSearch';
import '../styles/SearchBar.css';

const SearchBar = ({callback}) => {

    const [value, handleChange] = useSearch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        callback(value);
    }

    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input className="SearchBar-field" value={value} type="text" onChange={handleChange}/>
            <button className="SearchBar-button" type="submit">Search</button>            
        </form>
    )
}

export default SearchBar;