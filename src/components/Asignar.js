import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"; //Usaba Grid pero se cambio el nombre a Container https://react-bootstrap.github.io/migrating/

import FiltroActividad from "./FiltroActividad";


class Asignar extends Component {

  render() {
    return (
      <div className="asignar">
        <Container>
        <FiltroActividad/>
                </Container >
      </div>


    )
  }
}

export default Asignar;