import React, { Component } from 'react';

//---IMAGENES
import logo from "./logo-transparente.png";

class LogoUsuario extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <img
                className="img-fluid"
                src={logo}
                alt="imagen_logo"
              /> 
              ASIGNACION DE AULAS - UNAHUR
              <div>USUARIO</div>
            </nav>
        )
    }
}

export default LogoUsuario;