import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Encabezado from  "./components/Encabezado";

class App extends React.Component {
  render() {
  
    return (
      <BrowserRouter>
      <div>
        <div className="App">
          <br/>
          <div className="container-fluid">
          <Encabezado/>
          </div>

          <br/>
          <br/>
        
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;