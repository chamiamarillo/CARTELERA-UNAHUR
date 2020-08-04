import React, { Fragment, useState } from 'react';
import FiltroActividad from './FiltroActividad';

const FiltrosComponente = () => {

  // definicion de state para el uso de los filtros
  const [ actividad, guardarActividad ] = useState('');
  const [ comision, guardarComision ] = useState('');
  const [ docente, guardarDocente ] = useState('');
  // para ocultar el listado
  const [ render, imprimirRender ] = useState(false)
  

  const enviarBusqueda = e => {
   e.preventDefault()

   // recetear el formulario
   guardarActividad('');
   guardarComision('');
   guardarDocente('');
  }


  return ( 
    <Fragment>
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
            onChange={e => guardarActividad(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonActividad"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
        <br/>
        <label>
          {'Comisión: '} {/* el texto del label para poder tener un espacio */}
          <input 
            type="text" 
            className="comision"
            placeholder="Buscar por Comisión"
            value={comision} 
            onChange={e => guardarComision(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonComision"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
        <br/>
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
      <div>
      { render ? 
        <FiltroActividad 
          actividad={actividad}
          comsion={comision}
          docente={docente} 
        /> : 
        null }
      </div>
     </Fragment>

   );
}
 
export default FiltrosComponente