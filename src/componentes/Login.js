import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ApiClima from './ApiClima'
import './Login.css';
import Swal from 'sweetalert2'

function Login() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleRegister = () => {
        if (username && password && email) {
            const newUser = { username, password, email };
            setUsers([...users, newUser]);
            setUsername('');
            setPassword('');
            setEmail('');
            console.log('Nuevo usuario registrado:', newUser);
            Swal.fire('Registro exitoso. Ahora podés iniciar sesión.');
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Por favor completá todos los campos',
            });
        }
    };

    const handleLogin = () => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setLoggedIn(true);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tus datos no coinciden!',
                footer: '<p>Por favor, volvé a intentarlo.</p>'
            })
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
        setEmail('');
    };

    return (
        <div className="body">
            <div className="logContainer">
                {loggedIn ? (
                    <>
                        <h1 className="titulo">Hola, {username}!</h1>
                        <ApiClima />
                        <div className="logButtonContainer">
                            <Link to="/ListaProductos">
                                <button className="logButton">
                                    COMPRAR
                                </button>
                            </Link>
                            <button className="logButton" onClick={handleLogout}>
                                CERRAR SESIÓN
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="titulo">REGISTRO E INICIO DE SESIÓN</h1>
                        <div>
                            <label className="logLabel">USUARIO:</label>
                            <input className="input-field" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>

                        <div>
                            <label className="logLabel" position="right">CONSTRASEÑA:</label>
                            <input className="input-field" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label className="logLabel" position="right">CORREO ELECTRÓNICO:</label>
                            <input className="input-field" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="button-container">
                            <button className="logButton" onClick={handleRegister}>REGISTRARSE</button>
                            <button className="logButton" onClick={handleLogin}>INICIAR SESIÓN</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default Login;
