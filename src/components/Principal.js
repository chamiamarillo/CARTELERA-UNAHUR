import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//--- COMPONENTES
import MenuFiltroIzq from "./MenuFiltroIzq";
import Central from  "./Central";
import Menu from './Menu';


class Principal extends React.Component {
  render() {
  
    return (

 
<div class="container1">
  <MenuFiltroIzq/>
  <p>This example demonstrates a 50%/50% split on small, medium and large devices. On extra small devices, it will stack (100% width).</p>      
  <p>Resize the browser window to see the effect.</p>      
  <div class="row">
    <div class="col-sm-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </div>
    <div class="col-sm-6" >
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.    
    </div>
  </div>
</div>
    )
  }
}

export default Principal;