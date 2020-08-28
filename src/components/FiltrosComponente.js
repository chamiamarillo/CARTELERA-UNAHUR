import React, { Fragment, useState } from 'react';
import CaracteristicasAulas from './CaracteristicasAulas';
import TablaComisiones from './TablaComisiones';
import MaquetaGrilla from './MaquetaGrilla';
import './css/FiltrosComponent.css'

const FiltrosComponente = (props) => {

  let jsonGrilla2 = props.result;

  // definicion de state para el uso de los filtros
  const [ buscarActividad, guardarActividad ] = useState('');
  const [ buscarComision, guardarComision ] = useState('');
  const [ buscarDocente, guardarDocente ] = useState('');
  /// pasar conjunto de datos como props al filtro actividad (renderisa la tabla)
  const [ jsonGrillaFiltrado, guardarJsonGrillaFiltrado ] = useState([]);
  // para usar la misma api, con diferentes parametros
  //const [ tipoFiltro, guardarTipoFiltro ] = useState('');
  // direcciones de la appi este parametro esta casi fijo!!!!
  //const [ direccionApi, guardarDireccionApi ] = useState('');


  const enviarBusqueda = e => {
   e.preventDefault()

   // recetear el formulario
   guardarActividad('');
   guardarComision('');
   guardarDocente('');
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const mapearActividad = (buscarActividad, jsonGrillaFiltrado) => {

    const nvoJson = jsonGrillaFiltrado.filter(data  => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1)) 
    guardarJsonGrillaFiltrado(nvoJson)
  }

  const mapearComision = (buscarComision, jsonGrillaFiltrado) => {

    const nvoJson = jsonGrillaFiltrado.filter(data  => (data.nombre.toLowerCase().indexOf(buscarComision.toLowerCase()) > -1)) 
    guardarJsonGrillaFiltrado(nvoJson)
  }
  
  const mapearDocente = (buscarDocente, jsonGrillaFiltrado) => {



    const nvoJson = jsonGrillaFiltrado.filter(data  => (data.docentes.toLowerCase().indexOf(buscarDocente.toLowerCase()) > -1)) 
    guardarJsonGrillaFiltrado(nvoJson)
  }
  
  
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// filtros (input)           //
//////////////////////////////
console.log(JSON.stringify(jsonGrillaFiltrado));
console.log(JSON.stringify(jsonGrilla2));
  return ( 
    <Fragment>
      <p></p>
      <form 
        id='formActividad'
        onSubmit={enviarBusqueda}
      ><li id="pActividad">
        <label>
          {'Actividad: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="actividad"
            id="efectoGris"
            placeholder="Buscar por Actividad"
            value={buscarActividad} 
            onChange={e => guardarActividad(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonActividad"
          value="Buscar"
          onClick={ () => mapearActividad(buscarActividad, jsonGrilla2)}
        /></li>
        <li id="pComision">
        <label>
          {'Comisión: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="nombre"
            id="efectoGris"
            placeholder="Buscar por Comisión"
            value={buscarComision} 
            onChange={e => guardarComision(e.target.value) } 
          />
        </label>
        <input 
          type="submit" 
          className="botonComision"
          value="Buscar"
          onClick={ () => mapearComision(buscarComision, jsonGrilla2)}
        /></li>
        <li id="pDocente">
        <label>
          {'Docente: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="apellido_nombres"
            id="efectoGris"
            placeholder="Buscar por Docente"
            value={buscarDocente} 
            onChange={e => guardarDocente(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonDocente"
          value="Buscar"
          onClick={ () => mapearDocente(buscarDocente, jsonGrilla2)}
        /></li>
      </form>
      <p></p>
      <div>
          <TablaComisiones 
            result = {jsonGrillaFiltrado}
          />      
      </div>
      <p></p>
      <div>
        <CaracteristicasAulas /> 
      </div>
      <div>
        <MaquetaGrilla />
      </div>
     </Fragment>

   );
}
 
export default FiltrosComponente
