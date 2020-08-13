import { BrowserRouter } from 'react-router-dom';
import React from 'react';

//--- COMPONENTES
import LogoUsuario from "./LogoUsuario";


class Encabezado extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <LogoUsuario />
          
        </div>
      </BrowserRouter>
    );
  }
}
export default Encabezado;