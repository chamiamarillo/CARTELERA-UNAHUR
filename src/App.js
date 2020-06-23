import React, { Component } from 'react';
import './App.css';


import Encabezado from  "./components/Encabezado";
import MenuFiltroIzq from "./components/MenuFiltroIzq";
import Principal from "./components/Principal"

class App extends React.Component {
  render() {
  
    return (
 
      <div class="container">
        <Principal/>
      </div>
            
    );
  }
}
export default App;