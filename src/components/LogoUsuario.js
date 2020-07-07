import React, { Fragment } from 'react';

//---IMAGENES
import logo from "./logo-transparente.png";

const LogoUsuario = () => {
    return (
        <Fragment>
            <img 
                className="img-fluid"
                src={logo}
                alt="imagen_logo"
            />
            
            <div className="lead text-center">
                <br></br>
                ASIGNACION DE AULAS - UNAHUR
            </div>
        </Fragment>
    );
}

export default LogoUsuario;