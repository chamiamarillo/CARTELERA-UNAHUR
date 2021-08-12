import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FechaHora from './FechaHora';

//class Menu extends Component {
const Menu = () => {

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Asignacion">Asignacion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Modificacion">Modificacion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Consulta">Consulta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Reporte">Reporte</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Salir">Salir</Link>
                        </li>
                    </ul>
                </div>
                <div className="menuhora">
                    <button className="btn btn-default" type="submit">{<FechaHora />}</button>
                </div>
            </nav>
        )
    
} 

export default Menu;