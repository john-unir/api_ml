// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="ProductList">
            {products.map((product) => (
                <div className="ProductItem" key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title}/>
                    <p>Precio: {product.price} ARS</p>
                    <p>Condición: {product.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
                    <p>Disponibles: {product.available_quantity}</p>
                    <a href={product.permalink} target="_blank" rel="noopener noreferrer">Ver en MercadoLibre</a>
                </div>
            ))}
        </div>
    );
};

export default ProductList;