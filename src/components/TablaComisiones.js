import React, { useState, useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
//import { grilla } from '../util/services/grilla.service'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/TablaComisiones.css'
//import DataTable from 'react-data-table-component';

const TablaComisiones = ({ jsonGrillaFiltrado }) => {

  //const [datatable, setDatatable] = useState(jsonGrillaFiltrado);
  const [checkbox, setCheckbox1] = useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  /*
    const actualizar = e => {
      ...datatable;
  
    }
    */

  console.log("Json grilla filtrado")
  console.log(jsonGrillaFiltrado)
  /*
    useEffect(() => {
    
      console.log("FUNCION GRILLA....")
      console.log(grilla(jsonGrillaFiltrado))
     setDatatable(grilla(jsonGrillaFiltrado))
     // setCheckbox1('')
    }, [jsonGrillaFiltrado])
    
  
    console.log(datatable)
    */
  return (
    <>
      {
        jsonGrillaFiltrado &&

        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={jsonGrillaFiltrado}
          checkbox
          headCheckboxID='id2'
          bodyCheckboxID='checkboxes2'
          getValueCheckBox={(e) => {
            showLogs2(e);
          }}
        />
      }
    </>
  );



}

export default TablaComisiones

