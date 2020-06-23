import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './css/MenuTab.css';

class MenuTab extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    render() {
        return (
            <nav className="navbar navbar-inverse container" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <a className="navbar-brand" href="/">Menu Principal</a>
                    </div>
                    <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className={this.getNavLinkClass("/Asignar")}><NavLink to="/Asignar" >Asignar</NavLink></li>
                            <li className={this.getNavLinkClass("/CrearEstudiante")}><NavLink to="/CrearEstudiante">Crear Estudiante</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
MenuTab = withRouter(MenuTab);
export default MenuTab;