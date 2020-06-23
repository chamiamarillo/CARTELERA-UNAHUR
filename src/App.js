import React, { Component } from 'react';
import './App.css';


import Encabezado from  "./components/Encabezado";
import MenuFiltroIzq from "./components/MenuFiltroIzq"

class App extends React.Component {
  render() {
  
    return (
 
      <div class="container">
        <Encabezado/>
        <div class="container1">

        <MenuFiltroIzq/>
        </div>
        </div>

            
    );
  }
}
export default App;