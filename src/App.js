import React, { Component } from 'react';
import './App.css';

//---Componentes
import Principal from "./components/Principal"

class App extends React.Component {
  render() {
  
    return (
      <div className="container">
        <Principal/>
      </div>
     );
  }
}
export default App;