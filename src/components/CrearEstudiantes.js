import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"; //Usaba Grid pero se cambio el nombre a Container https://react-bootstrap.github.io/migrating/


class CrearEstudiantes extends Component {
  state = {
    nombre_apellido: "Adriana",
    dni: 27386919,
    dataValue: false
  }


  crearAlumno = () => {
    var data = {
      nombre_apellido: this.nombre_apellido,
      dni: this.dni,
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="show-grid">
            <Col mdpull={9} md={9}>
        <div className="contenedor-titulo">
          <div className="titulo">CREAR NUEVO ESTUDIANTE</div>
        </div>
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
          <form
            action=""
            autoComplete="off"
            className="contenedor-grid contenedor-grid-abm"
          // onSubmit={(e) => this.handleSubmit(e)}
          >
            <div className="contenido">
              <div className="texto">Nombre y apellido (*)</div>
              <input
                className="input"
                type="text"
                name="nombre_apellido"
                value={this.state.nombre_apellido}
                onChange={this.onChange}
              />
              <div className="texto">Dni(*)</div>
              <input
                className="input"
                type="number"
                name="dni"
                onChange={this.onChange}
                value={this.state.dni}
              />

            </div>
            <footer className="footer">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => this.crearAlumno()}
              >
                Crear
              </button>
            </footer>
          </form>
        </div>
        </Col>
        </Row >
        </Container>
         
            
      </div>
    )
  }
}

export default CrearEstudiantes;