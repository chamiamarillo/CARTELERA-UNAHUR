import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';


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
    
    // uso los hooks del FiltrosComponente y aca los tomo como props
   // let actividad = this.props.actividad;
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