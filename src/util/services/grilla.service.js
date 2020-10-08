//// Funcion para armar la tabla en el componente TablaComisiones ////
/////////////////////////////////////////////////////////////////////
import React from 'react';
import { MDBBtn } from 'mdbreact';

export const grilla = (jsonGrillaFiltrado, setComisionSelec) => {

  const rowsData = jsonGrillaFiltrado.map(data => ( // los "..." hacen que valla guardando los resultados anteriores.
    {
      codigo: data.comision,
      nombre: data.nombre,
      docentes: data.docentes.map(docente => docente.nombres + " " + docente.apellido + " - "),
      acceso_especial: data.acceso_especial,
      cant_inscriptos: data.cant_inscriptos,
      horarios: data.horarios.map(hora => hora.dia + " - "),
      clickEvent: () => setComisionSelec(data.comision + ' - ' + data.nombre), // estoy usando la referencia del estado que esta en el componente FiltrosComponente
      boton: <MDBBtn color="light-green" active >Seleccionar</MDBBtn>    }
      
  ))

  return {
    columns: [
      {
        label: 'boton',
        field: 'boton',
        width: 50,
      },

      {
        label: 'Codigo',
        field: 'codigo',
        //sort: 'asc',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Codigo',
        },
      },
      {
        label: 'Nombre',
        field: 'nombre',
        //sort: 'asc',
        width: 150
      },
      {
        label: 'Docentes',
        field: 'docentes',
        //sort: 'asc',
        width: 150
      },
      {
        label: 'Acceso Especial',
        field: 'acceso_especial',
        //sort: 'asc',
        width: 150
      },
      {
        label: 'Cant. Inscriptos',
        field: 'cant_inscriptos',
        //sort: 'asc',
        width: 150
      },
      {
        label: 'Dia de Cursada',
        field: 'horarios',
        //sort: 'asc',
        width: 150
      }
    ],
    rows:
      rowsData
  }
}