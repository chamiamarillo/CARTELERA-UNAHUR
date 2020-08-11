import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

export default class DatatablePage extends Component {
  
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

    const data = {
      columns: [
       {
          label: 'Codigo',
          field: 'codigo',
          sort: 'asc',
          width: 150
       },
       {
          label: 'Nombre',
          field: 'nombre',
          sort: 'asc',
          width: 150
       },
       {
          label: 'Docentes',
          field: 'docentes',
          sort: 'asc',
          width: 150
       },
       {
          label: 'Acceso Especial',
          field: 'acceso_especial',
          sort: 'asc',
          width: 150
       },
       {
          label: 'Cant. Inscriptos',
          field: 'cant_inscriptos',
          sort: 'asc',
          width: 150
       },
       {
          label: 'Dia de Cursada',
          field: 'horarios',
          sort: 'asc',
          width: 150
       }
      ],
      rows: [
        ...this.props.result.map( data => (
         {
          //key: data.comision,
            codigo: data.comision,
            nombre: data.nombre,
            docentes: data.docentes.map(docente => docente.nombres+" "+docente.apellido+" - "),
            acceso_especial: data.acceso_especial,
            cant_inscriptos: data.cant_inscriptos,
            horarios: data.horarios.map(hora => hora.dia+" - ")
         }
       ))
     ]
    };

  const { error, isLoaded, items } = this.state;
  if (error) {
  return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
  return <div>Cargando listado...</div>;
  } else {
    return (
      <div>
        <section className="tanning">
            <div className="container">         
              <div className="introductory_details customer-table">
                <MDBDataTable
                  entries={5}
                  entriesOptions={[5,10,15,20]}
                  entriesLabel='Cant. Registros'
                  polite='caca'
                  striped
                  bordered
                  small
                  data={data}
                />
              </div>
            </div>
        </section>
      </div>
    )
  }
}




  
}
