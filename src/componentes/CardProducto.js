import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './CardProducto.css';

const CardProducto = ({ producto }) => {
  return (
    <Card className="producto-card">
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/Productos/${producto.fotoPrincipal}`}
        alt={producto.nombre}
      />
      <Card.Body className="card-info">
        <Card.Title>
          <h1 className="card-title">{producto.nombre.toUpperCase()}</h1>
        </Card.Title>
        <Card.Text>
          <strong>Talles:</strong> {producto.talles.join(', ')}<br />
          <strong>Precio:</strong> ${producto.precio}
        </Card.Text>
        <Link to={{ pathname: `/DetalleProducto/${producto.codigo}`, state: { producto } }}>
          <button className="boton-detalles">
            Ver detalles
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;