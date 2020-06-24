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
        <Row >
          <Col >
            <Encabezado />
            <br />
          </Col>
        </Row>
        <Row >
          <Col>
            <div className="col-sm-2"><MenuFiltroIzq /></div>
            <br />
            <div className="col-sm-10"><Central /></div>

          </Col>
        </Row>

      </Container>
    )
  }
}

export default Principal;