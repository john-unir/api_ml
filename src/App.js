// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    const handleSearch = async (term) => {
        try {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${term}`);
            setProducts(response.data.results);
        } catch (error) {
            console.error("Error al realizar la solicitud a la API", error);
        }
    };

    return (
        <div className="App">
            <h2 className="titulo">Busca tu producto</h2>
            <SearchBar onSearch={handleSearch} />
            <ProductList products={products} />
        </div>
    );
};

export default App;