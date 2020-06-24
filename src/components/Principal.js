import React from 'react';
import './css/Principal.css';
import { Container, Row, Col } from "react-bootstrap"; //Usaba Grid pero se cambio el nombre a Container https://react-bootstrap.github.io/migrating/

//--- COMPONENTES
import MenuFiltroIzq from "./MenuFiltroIzq";
import Encabezado from './Encabezado';
import Central from './Central';

class Principal extends React.Component {
  render() {

    return (
      <Container>
        <Row className="show-grid">
          <Col md={12}>
            <Encabezado />
          </Col>
          </Row>
      
        <Row className="show-grid">       
          <Col md={12}>
            <br/>
            <MenuFiltroIzq />
          </Col>
          <Col md={4}>
            <Central />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Principal;