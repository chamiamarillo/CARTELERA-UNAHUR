import { BrowserRouter } from 'react-router-dom';
import React from 'react';

//--- COMPONENTES
import LogoUsuario from "./LogoUsuario";


const Encabezado = () => {
    return (
      <BrowserRouter>
        <div>
          <LogoUsuario />
        </div>
      </BrowserRouter>
    );
  
}
export default Encabezado;