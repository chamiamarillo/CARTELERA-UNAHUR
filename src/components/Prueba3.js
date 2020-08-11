import React, { Component } from 'react'
//import './Customer.css'
import { MDBDataTable, MDBNavLink } from 'mdbreact';

export default class Prueba3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
        };
      }



    componentDidMount() {
    
    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let url = 'http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?nombre=contiene%3BCPI&con_horarios=1&con_docentes=1'

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

        const data = {
            columns: [
                {
                    field: 'key',
                },
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
                ...this.state.items.map( data => (
                    {
                        //key: data.comision,
                        codigo: data.comision,
                        nombre: data.nombre,
                        docente: data.docentes.map(docente => docente.nombre +" "+ docente.apellido+" - "),
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
      return <div>CArgando listado...</div>;
    } else {
        return (
            <div>
                <section className="tanning">
                    <div className="container">
                        
                        <div className="introductory_details customer-table">
                            <MDBDataTable
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