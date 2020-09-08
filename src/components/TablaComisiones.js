import React, { useState, useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import './css/TablaComisiones.css'

import Franki from './Franki';

const TablaComisiones = ({ jsonGrillaFiltrado }) => {

  let result = jsonGrillaFiltrado
  console.log('ver jsongrilla', jsonGrillaFiltrado)
 
 useEffect(() => {
   if(result !== []){
      
  } else {
  
  }
}, [result])


  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Codigo',
        field: 'codigo',
        sort: 'asc',
        width: 150,
        attributes:{
            'aria-controls' : 'DataTable',
            'aria-label' : 'Codigo',
        },
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
    
    rows: 
      [
      ...jsonGrillaFiltrado.map(data => ( // los "..." hacen que valla guardando los resultados anteriores.
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
  });


  const [checkbox1, setCheckbox1] = useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  /*const widerData = {
    columns: [
      ...datatable.columns.map((col) => {
        col.width = 200;
        return col;
      }),
    ],
    rows: [...datatable.rows],
  }; Si queremos poner una barra de desplazamiento*/

  return (
    <>
      <MDBDataTableV5
        paging
        hover
        entriesOptions={[5, 10, 15, 20, 25]}
        entriesLabel='Cant. Registros'
        entries={5}
        pagesAmount={4}
        data={datatable}
        searchLabel='Buscar'
        searchTop 
        searchBottom={false}
        checkbox
        headCheckboxID='id4'
        bodyCheckboxID='checkboxes4'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
        paginationLabel={['Anterior', 'Siguiente']}
        //scrollX data={widerData} Para poner la barra e desplazamiento
      />
      
    </>
  );



}

export default TablaComisiones