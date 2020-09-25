import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/TablaComisiones.css'


const TablaComisiones = ({ jsonGrillaFiltrado }) => {

  return (
    <>
      {
        jsonGrillaFiltrado &&

        <MDBDataTableV5
          hover
          searchLabel='Buscar'
          entriesLabel='Cant. Registros'
          entriesOptions={[5, 10,15,20, 25,30]}
          entries={5}
          pagesAmount={4}
          data={jsonGrillaFiltrado}
          striped
          bordered
          materialInputs
          responsive
          focus
        />
      }
    </>
  );
}

export default TablaComisiones

