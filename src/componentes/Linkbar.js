import Nav from 'react-bootstrap/Nav';
import './Linkbar.css'
import { Link } from 'react-router-dom';


function Linkbar() {
    return (
        <>
        <Nav className='container justify-content-evenly'>
            <Nav.Item>
                <Nav.Link className="enlace"><Link to="/" className="enlace">HOME</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="enlace"><Link to="/Login" className="enlace">LOGIN</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="enlace"><Link to="/ListaProductos" className="enlace">FW23</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="enlace disabled"><Link to="/ApiExample" className="enlace">SALE</Link></Nav.Link>
            </Nav.Item>
        </Nav>
    </>

    );
}

export default Linkbar;