import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Encabezado from  "./components/Encabezado";
import Principal from  "./components/Principal";
import Menu from "./components/MenuFiltroIzq"

class App extends React.Component {
  render() {
  
    return (
 
      <div class="container">
        <Encabezado/>
        
        <div class="row">
          <div class="col-sm-2">
          <Menu/>
          </div>
          <div class="col-sm-6" >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.    
          </div>
        </div>
      </div>
    );
  }
}
export default App;