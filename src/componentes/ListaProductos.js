import React from 'react';
import CardProducto from './CardProducto';
import './ListaProductos.css';

const ListaProductos = ({ productos }) => {
    return (
        <div className="productos-container">
            {productos.map((producto, index) => (
                <CardProducto key={index} producto={producto} />
            ))}
        </div>
    );
};

export default ListaProductos;
