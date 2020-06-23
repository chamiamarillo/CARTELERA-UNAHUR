import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/Principal.css';


//--- COMPONENTES
import MenuFiltroIzq from "./MenuFiltroIzq";
import Central from "./Central";
import Encabezado from './Encabezado';


class Principal extends React.Component {
  render() {

    return (

      <div class="row">
        <div class="col-sm">
          <Encabezado />
        </div>
        <div>
          <MenuFiltroIzq />
        </div>

      </div>
    )
  }
}

export default Principal;