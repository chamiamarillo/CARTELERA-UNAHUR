import React, { Fragment } from 'react';
import Loguin from "./Loguin";

//---IMAGENES
import logo from "./logo-transparente.png";

const HeaderLogoTitulo = () => {
    return (
        <Fragment>
            <div className="anchoheader">
                <div className="logo">
                    <p>
                        <img 
                            className="img-fluid"
                            src={logo}
                            alt="imagen_logo"
                        />
                    </p>
                </div>
                <div className="tituloapp">
                    <div className="lead text-center">
                        ASIGNACION DE AULAS - UNAHUR
                    </div>
                </div>
                <div className="login">
                    <Loguin />
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderLogoTitulo;