import { BrowserRouter } from 'react-router-dom';
import React from 'react';


//--- COMPONENTES
import LogoUsuario from "./LogoUsuario";
import MenuTab from "./MenuTab";

class Encabezado extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <LogoUsuario />
          <MenuTab/>
        </div>
      </BrowserRouter>
    );
  }
}
export default Encabezado;