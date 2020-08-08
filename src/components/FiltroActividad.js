import React, { Component } from 'react';

class FiltroActividad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentWillReceiveProps() {    
    
    let result = this.props.result;
    this.setState({
      isLoaded: true,
      items: result
    });
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
          <table  className="table">
          
            <thead className="thead-dark">
              <tr>
                <th className="header" scope="col">Codigo</th>
                <th className="header" scope="col">Nombre</th>
                <th className="header" scope="col">Docente</th>
                <th className="header" scope="col">Acceso Especial</th>
                <th className="header" scope="col">Cant. Inscriptos</th>
                <th className="header" scope="col">Dia de Cursada</th>
              </tr>
            </thead>
            <tbody>
              {this.props.result.map(com => {
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