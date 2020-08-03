import React, { useState, Component } from 'react';

class FiltroActividad extends Component {

  
  //console.log(concatenarBusqueda);

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }


  componentWillReceiveProps() {
    let bbb = this.props.buscar;
  //  let bbb = "obj"
    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?nombre=contiene%3B${bbb}&con_horarios=1&con_docentes=1`

    //let url = 'http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20?con_horarios=1&con_docentes=1' // limitado a traer 20 registros
    fetch(proxyUrl + url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
          }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>CArgando listado...</div>;
    } else {
      return (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Docente</th>
                <th>Acceso Especial</th>
                <th>Cant. Inscriptos</th>
                <th>Dia de Cursada</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(com => {
                return (

                  <tr key={com.comision}>
                    <td>{com.comision}</td>
                    <td>{com.nombre}</td>
                    <td>{com.docentes.map(docente => docente.nombres +" "+ docente.apellido+" - ")}</td>
                    <td>{com.acceso_especial}</td>
                    <td>{com.cant_inscriptos}</td>
                    <td>{com.horarios.map(hora => hora.dia+" - ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

    }
  }
}

export default FiltroActividad;