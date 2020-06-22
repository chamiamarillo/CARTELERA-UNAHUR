import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import CrearEstudiantes from "./CrearEstudiantes";
import Asignar from "./Asignar";

class Menu extends Component {
    render() {
        return (

<div class="container">
   <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#asignar">Asignar</a></li>
    <li><a data-toggle="tab" href="#crearEstudiante">Crear Estudiantes</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div class="tab-content">
    <div id="asignar" class="tab-pane fade in active">
      <Asignar/>
    </div>
    <div id="crearEstudiante" class="tab-pane fade">
      <CrearEstudiantes/>    
    </div>

    
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
</div>

        )
    }
}

export default Menu;