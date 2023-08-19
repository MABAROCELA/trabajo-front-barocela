import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <>
            <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">PERITA</h2>
                        <ul>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Quiénes somos</a></li>
                            <li><Link to="/ListaProductos">Colección</Link></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Devoluciones</a></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Clientes felices</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">COLECCIONES</h2>
                        <ul>
                            <li><Link to="/ListaProductos">Fall-Winter 23</Link></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Spring-Summer 22</a></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Fall-Winter 22</a></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Anteriores</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">CONTACTO</h2>
                        <ul>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Ayuda</a></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Compras</a></li>
                            <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Anuncios</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">¡ÚLTIMO MOMENTO!</h2>
                        <p>Suscribite para recibir las últimas novedades.</p>
                        <form>
                            <input className="suscribe" type="email" name="email" placeholder="  Ingresá tu mail" />
                            <button className="susButton">Suscribirme</button>
                        </form>
                            </div>
                        </section>
                        <section className="ft-legal">
                            <ul className="ft-legal-list">
                                <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Términos &amp; Condiciones</a></li>
                                <li><a href="http://www.cap.org.ar" target="_blank" rel="noreferrer">Política de Privacidad</a></li>
                                <li>&copy; 2023 Copyright Marta Barocela</li>
                            </ul>
                        </section>
                    </footer>
                </>
                );
}

                export default Footer;