import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Route from 'react-router-dom/Route'


//--- COMPONENTES
import LogoUsuario from "./LogoUsuario";
import Nav from "./MenuTab"
import CrearEstudiantes from "./CrearEstudiantes";
import Asignar from "./Asignar";

class Encabezado extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <LogoUsuario />
        </div>
        <div>
          <Nav />
          <Route exact path="/Asignar" component={Asignar} />
          <Route path="/CrearEStudiante" component={CrearEstudiantes} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Encabezado;