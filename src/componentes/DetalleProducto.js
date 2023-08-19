import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetalleProducto.css';

const DetalleProducto = ({ productos }) => {
  const { codigo } = useParams();
  const producto = productos.find(p => p.codigo === codigo);

  const [selectedTalle, setSelectedTalle] = useState(null);
  const [comprarDisabled, setComprarDisabled] = useState(true);
  const [mainProductImage, setMainProductImage] = useState(producto.fotoPrincipal);

  const handleComprarClick = () => {
    
    alert(`Agregaste a tu carrito ${producto.nombre} - Talle: ${selectedTalle}`);
  };

  const handleTalleSelect = talle => {
    setSelectedTalle(talle);
    setComprarDisabled(false);
  };

  const handleThumbnailClick = foto => {
    setMainProductImage(foto);
  };

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
        <div className="detalle-producto">
          <div className="detalle-images">
            <div className="thumbnail_images">
              <ul id="thumbnail">
                <li key="main">
                  <img
                    onClick={() => handleThumbnailClick(producto.fotoPrincipal)}
                    src={`${process.env.PUBLIC_URL}/Productos/${producto.fotoPrincipal}`}
                    id="main_product_image"
                    alt={`${producto.nombre} - Foto Principal`}
                  />
                </li>
                {producto.fotosSecundarias.map((foto, index) => (
                  <li key={index}>
                    <img
                      onClick={() => handleThumbnailClick(foto)}
                      src={`${process.env.PUBLIC_URL}/Productos/${foto}`}
                      alt={`${producto.nombre} - Foto ${index + 2}`}
                    />
                  </li>
                ))}
              </ul>
            </div>


            <div className="main_image">
              <img
                src={`${process.env.PUBLIC_URL}/Productos/${mainProductImage}`}
                id="main_product_image"
                alt={`${producto.nombre} - Foto Principal`}
              />
            </div>

          </div>
          <div className="detalle-info">
            <h2 className="detalle-nombre">{producto.nombre}</h2>
            <p className="detalle-precio">${producto.precio}</p>
            <p className="detalle-descripcion">{producto.descripcion}</p>
            <p className="detalle-composicion">
              <strong>Composición:</strong> {producto.composicion}
            </p>
            <div className="detalle-talles">
              <strong>Talles:</strong>
              <div className="talle-buttons">
                {producto.talles.map((talle, index) => (
                  <button
                    key={index}
                    className={`talle-button ${selectedTalle === talle ? 'selected' : ''}`}
                    onClick={() => handleTalleSelect(talle)}
                  >
                    {talle}
                  </button>
                ))}
              </div>
            </div>
            <button className="boton-comprar" onClick={handleComprarClick} disabled={comprarDisabled}>
              COMPRAR
            </button>
          </div>
        </div>
    </>
  );
};

export default DetalleProducto;