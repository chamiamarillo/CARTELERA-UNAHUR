import React, { Fragment, useState } from 'react';
import FiltroActividad from './FiltroActividad';
import CaracteristicasAulas from './CaracteristicasAulas';
import  MaquetaGrilla from "./MaquetaGrilla";

const FiltrosComponente = () => {

  // definicion de state para el uso de los filtros
  const [ buscarActividad, guardarActividad ] = useState('');
  const [ buscarComision, guardarComision ] = useState('');
  const [ buscarDocente, guardarDocente ] = useState('');
  /// pasar conjunto de datos
  const [ jsonGrilla, guardarJsonGrilla ] = useState([]);



  const enviarBusqueda = e => {
   e.preventDefault()

   // recetear el formulario
   guardarActividad('');
   guardarComision('');
   guardarDocente('');
  }

  const fetchGrillaActividad = (buscarActividad) => {

    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    /////
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?actividad=contiene%3B${buscarActividad}&con_horarios=1&con_docentes=1`

    //let url = 'http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20?con_horarios=1&con_docentes=1' // limitado a traer 20 registros
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

  const fetchGrillaComision = (buscarComision) => {

    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    /////
    
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?nombre=contiene%3B${buscarComision}&con_horarios=1&con_docentes=1`

    //let url = 'http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20?con_horarios=1&con_docentes=1' // limitado a traer 20 registros
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


  const fetchGrillaDocente = (buscarDocente) => {

    let username = 'aulas';
    let password = 'aulas';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    /////
    
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?nombre=contiene%3B${buscarDocente}&con_horarios=1&con_docentes=1`

    //let url = 'http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20?con_horarios=1&con_docentes=1' // limitado a traer 20 registros
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
  


  
  return ( 
    <Fragment>

      <form className="formAsignacion"
        onSubmit={enviarBusqueda}
      >
        <div className= "nuevo-estilo2">
        <label>
          {'Actividad: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="actividad"
            placeholder="Buscar por Actividad"
            value={buscarActividad} 
            onChange={e => guardarActividad(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonActividad"
          value="Buscar"
          onClick={ () => fetchGrillaActividad(buscarActividad) }
        /></div>
        <div className= "nuevo-estilo2">
        <label>
          {'Comisión: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="comision"
            placeholder="Buscar por Comisión"
            value={buscarComision} 
            onChange={e => guardarComision(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonComision"
          value="Buscar"
          onClick={ () => fetchGrillaComision(buscarComision)}
        /></div>
        <div className= "nuevo-estilo2">
        <label>
          {'Docente: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="docente"
            placeholder="Buscar por Docente"
            value={buscarDocente} 
            onChange={e => guardarDocente(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonDocente"
          value="Buscar"
          onClick={ () => fetchGrillaDocente(buscarDocente)}
        /></div>
      </form>
      <p></p>
      <div>
          <FiltroActividad 
             result = {jsonGrilla}
          />
      </div>
      <p></p>
      <div>
        <CaracteristicasAulas /> 
      </div>
     
      <div>
        <MaquetaGrilla />)
      </div>
     </Fragment>

   );
}
 
export default FiltrosComponente




/*












*/