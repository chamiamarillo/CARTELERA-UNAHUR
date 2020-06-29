import React, { Component, useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Asignar from "./Asignar";
import CrearEstudiantes from "./CrearEstudiantes";
import './css/Central.css';


class Central extends Component {

  renderSwitch(mostrar) {

    switch (mostrar) {
      case 'Asignar':
        return <Asignar />;
      case 'Crear Estudiante':
        return <CrearEstudiantes />
      default:
        return ;
    }
  }

  render() {

    const mostrar = this.props.mostrar
    return (
      <div id="central">
        {this.renderSwitch(mostrar)}
      </div>
    );
  }


}




export default Central;