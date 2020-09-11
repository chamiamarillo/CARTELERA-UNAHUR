import React, { useState, useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { grilla } from '../util/services/grilla.service'
import './css/TablaComisiones.css'


//import Result from '../components/result';

const TablaComisiones = ({ jsonGrillaFiltrado }) => {

  //let result = grilla(jsonGrillaFiltrado)

  const [datatable, setDatatable] = useState(grilla(jsonGrillaFiltrado));

  useEffect(() => {
    setDatatable(grilla(jsonGrillaFiltrado))
  }, [jsonGrillaFiltrado])


  const [checkbox1, setCheckbox1] = useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  
  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 10, 15, 20]}
        entriesLabel='Cant. Registros'
        entries={5}
        pagesAmount={4}
        data={datatable}
        searchLabel='Buscar'
        searchTop
        searchBottom={false}
        checkboxinline
        headCheckboxID='id4'
        bodyCheckboxID='checkboxes4'
        //paginationLabel={['Anterior', 'Siguiente']}
        //scrollX data={widerData} Para poner la barra e desplazamiento
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />

    </>
  );



}

export default TablaComisiones

