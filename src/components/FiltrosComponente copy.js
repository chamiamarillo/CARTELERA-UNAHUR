import React, { Fragment, useState, useEffect } from 'react';
import FiltroActividad from './FiltroActividad';
import CaracteristicasAulas from './CaracteristicasAulas';


const FiltrosComponente = () => {

  // definicion de state para el uso de los filtros
  const [ actividad, guardarActividad ] = useState('');
  const [ comision, guardarComision ] = useState('');
  const [ docente, guardarDocente ] = useState('');
  // para ocultar el listado
  const [ render, imprimirRender ] = useState(false)
  // tipo de hoks o props
  const [ nomAccion, guardarNomAccion ] = useState('');
  

  const enviarBusqueda = e => {
   e.preventDefault()

   // validar

  

   // recetear el formulario
   guardarActividad('');
   guardarComision('');
   guardarDocente('');
  }


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
            value={actividad} 
            onChange={e => guardarActividad(e.target.value) + guardarNomAccion(e.target.className)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonActividad"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
        
        <label>
          {'Comisión: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="comision"
            placeholder="Buscar por Comisión"
            value={comision} 
            onChange={e => guardarComision(e.target.value) + guardarNomAccion(e.target.className)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonComision"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
        
        <label>
          {'Docente: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="docente"
            placeholder="Buscar por Docente"
            value={docente} 
            onChange={e => guardarDocente(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonDocente"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
      </form>
      <p></p>
      <div>
      { render ? 

        <FiltroActividad 
          actividad={actividad}
        />
        : null }
      </div>
      <p></p>
      <div>
        <CaracteristicasAulas /> 
      </div>
     </Fragment>

   );
}
 
export default FiltrosComponente