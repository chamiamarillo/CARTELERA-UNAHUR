import React from 'react';
import './css/Principal.css';
import { Container, Row, Col } from "react-bootstrap"; //Usaba Grid pero se cambio el nombre a Container https://react-bootstrap.github.io/migrating/

//--- COMPONENTES
import MenuFiltroIzq from "./MenuFiltroIzq";
import Encabezado from './Encabezado';
import MenuTab from './MenuTab';

class Principal extends React.Component {
  render() {

    return (

      <Container>
            <Encabezado />
            
      </Container>
 
    )
  }
}

export default Principal;