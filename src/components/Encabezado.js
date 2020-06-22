import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//--- COMPONENTES
import LogoUsuario from "./LogoUsuario";
import Menu from  "./Menu";


class Encabezado extends React.Component {
  render() {
  
    return (
      <BrowserRouter>
      <div>
        <div className="Encabezado">
          <br/>
          <div className="container-fluid">
          <LogoUsuario/>
          </div>
          <br/>
          <br/>
          <div id="menu"> </div>
          <Menu/>

          <br/>
          <br/>
        
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default Encabezado;