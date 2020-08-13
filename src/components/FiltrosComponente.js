import React, { Fragment, useState } from 'react';
import CaracteristicasAulas from './CaracteristicasAulas';
import TablaComisiones from './TablaComisiones';


const FiltrosComponente = () => {

  // definicion de state para el uso de los filtros
  const [ buscarActividad, guardarActividad ] = useState('');
  const [ buscarComision, guardarComision ] = useState('');
  const [ buscarDocente, guardarDocente ] = useState('');
  /// pasar conjunto de datos como props al filtro actividad (renderisa la tabla)
  const [ jsonGrilla, guardarJsonGrilla ] = useState([]);
  // para usar la misma api, con diferentes parametros
  const [ tipoFiltro, guardarTipoFiltro ] = useState('');
  // direcciones de la appi este parametro esta casi fijo!!!!
  const [ direccionApi, guardarDireccionApi ] = useState('');

  
  const enviarBusqueda = e => {
   e.preventDefault()

   // recetear el formulario
   guardarActividad('');
   guardarComision('');
   guardarDocente('');
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Metodos que consultan la api de guarani creada para los filtros //
  /////////////////////////////////////////////////////////////////////

  //        para actividad  =>  filtro actividad en front
  //           para nombre  =>  filtro comision en front
  // para apellido_nombres  =>  filtro docente en front

  const fetchGrilla = (valorBuscar,filtroElegido,tipoApi) => {

    // $valorBuscar corresponde filtro del front. El valor a buscar!!!
    // $filtroElegido corresponde si se filtra por actividad, comision o docente
    // $tipoApi es la direccion url de la api a utilizar

    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/${tipoApi}?${filtroElegido}=contiene%3B${valorBuscar}&con_horarios=1&con_docentes=1&limit=50` // limitado a traer 50 registros ya que no hay tantas comisiones

    fetch(proxyUrl + url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })
      .then(res => res.json())
      .then(
        (result) => {
          guardarJsonGrilla(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return ( 
    <Fragment>
      <p></p>
      
      <form 
        onSubmit={enviarBusqueda}
      >
        <label>
          {'Actividad: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="actividad"
            placeholder="Buscar por Actividad"
            value={buscarActividad} 
            onChange={e => guardarActividad(e.target.value) + guardarTipoFiltro(e.target.className) + guardarDireccionApi('comisiones-aulas')} 
          />
        </label>
        <input 
          type="submit" 
          className="botonActividad"
          value="Buscar"
          onClick={ () => fetchGrilla(buscarActividad, tipoFiltro, direccionApi)}
        />
        
        <label>
          {'Comisión: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="nombre"
            placeholder="Buscar por Comisión"
            value={buscarComision} 
            onChange={e => guardarComision(e.target.value) + guardarTipoFiltro(e.target.className) + guardarDireccionApi('comisiones-aulas')} 
          />
        </label>
        <input 
          type="submit" 
          className="botonComision"
          value="Buscar"
          onClick={ () => fetchGrilla(buscarComision, tipoFiltro, direccionApi)}
        />
        
        <label>
          {'Docente: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="apellido_nombres"
            placeholder="Buscar por Docente"
            value={buscarDocente} 
            onChange={e => guardarDocente(e.target.value) + guardarTipoFiltro(e.target.className) + guardarDireccionApi('docentescomisiones-unahur')} 
          />
        </label>
        <input 
          type="submit" 
          className="botonDocente"
          value="Buscar"
          onClick={ () => fetchGrilla(buscarDocente, tipoFiltro, direccionApi )}
        />
      </form>
      <p></p>
      <div>
          <TablaComisiones 
            result = {jsonGrilla}
          />      
      </div>
      <p></p>
      <div>
        <CaracteristicasAulas /> 
      </div>
     </Fragment>

   );
}
 
export default FiltrosComponente
