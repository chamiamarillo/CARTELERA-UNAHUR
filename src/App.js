import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"; //Usaba Grid pero se cambio el nombre a Container https://react-bootstrap.github.io/migrating/

//---Componentes
import Principal from "./components/Principal"
import MenuFiltroIzq from "./components/MenuFiltroIzq";


class App extends React.Component {
  render() {

    return (
      <div>
      <Col className="col-sm-10" >
       <Principal />
      </Col>
      <Col className="col-sm-2">
      <MenuFiltroIzq />
      </Col>
      </div>

      
    );
  }
}
export default App;