import React, { Component } from 'react';
import './css/LogoUsuario.css';
//---IMAGENES
import logo from "./logo-transparente.png";

class LogoUsuario extends Component {
    render() {
        return (
            <nav className="navbar">

                <img
                    className="img-fluid"
                    src={logo}
                    alt="imagen_logo"
                />
                <div className="lead text-center">
                    <br></br>
                  ASIGNACION DE AULAS - UNAHUR
            </div>
            </nav>
        )
    }
}

export default LogoUsuario;