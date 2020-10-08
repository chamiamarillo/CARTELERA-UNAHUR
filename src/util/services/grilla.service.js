//// Funcion para armar la tabla en el componente TablaComisiones ////
/////////////////////////////////////////////////////////////////////
import { MDBBtn } from 'mdbreact';
import React from 'react';


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
      boton: <MDBBtn color="light-green" active >Seleccionar</MDBBtn> 
    }
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
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Codigo',
        },
      },
      {
        label: 'Nombre',
        field: 'nombre',
        width: 150
      },
      {
        label: 'Docentes',
        field: 'docentes',
        width: 150
      },
      {
        label: 'Acceso Especial',
        field: 'acceso_especial',
        width: 150
      },
      {
        label: 'Cant. Inscriptos',
        field: 'cant_inscriptos',
        width: 150
      },
      {
        label: 'Dia de Cursada',
        field: 'horarios',
        width: 150
      }
    ],
    rows:
      rowsData
  }
}