import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact'; // componente de boostap usado para renderizar tablas y armar paginacion

export default class TablaComisiones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  /*
  componentWillReceiveProps() {    
  
    let result = this.props.result;
    this.setState({
      isLoaded: true,
      items: result
    });
  }
  */

  static getDerivedStateFromProps(props) {

    let { result } = props

    return {
      isLoaded: true,
      items: result
    };
  }


  render() {

    let { result } = this.props
    console.log(this.props);
    // armamos las tablas identificando las columnas
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

      // vamos cargando cada columna con el resultado que arroja la api, recorriendo todo el json
      rows: [
        ...result.map(data => ( // los "..." hacen que valla guardando los resultados anteriores.
          {
            codigo: data.comision,
            nombre: data.nombre,
            docentes: data.docentes.map(docente => docente.nombres + " " + docente.apellido + " - "),
            acceso_especial: data.acceso_especial,
            cant_inscriptos: data.cant_inscriptos,
            horarios: data.horarios.map(hora => hora.dia + " - ")
          }
        ))
      ]
    };

    const { error, isLoaded } = this.state;
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
                {/* llamo al componente MDBDataTable que tiene bootstrap y configuro las opciones */}
                <MDBDataTable
                  entries={5}
                  entriesOptions={[5, 10, 15, 20]}
                  entriesLabel='Cant. Registros'
                  info={false}
                  paginationLabel={['Anterior', 'Siguiente']}
                  searchLabel='Buscar'
                  noBottomColumns={true}
                  noRecordsFoundLabel="Aguardando busqueda"
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

