// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={term}
                onChange={handleInputChange}
                placeholder="Busca un producto..."
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;