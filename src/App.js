import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navibar from './componentes/Navibar';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import Login from './componentes/Login';
import productos from './componentes/productos';
import CardProducto from './componentes/CardProducto';
import ListaProductos from './componentes/ListaProductos';
import DetalleProducto from './componentes/DetalleProducto';
import ApiClima from './componentes/ApiClima';

function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/trabajo-front-barocela' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/CardProducto' element={<CardProducto />}></Route>
        <Route path='/ListaProductos' element={<ListaProductos productos={productos} />}></Route>
        <Route path="/DetalleProducto/:codigo" element={<DetalleProducto productos={productos} />} />
        <Route path='/ApiClima' element={<ApiClima />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;