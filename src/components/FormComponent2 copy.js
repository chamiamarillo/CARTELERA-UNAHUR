import React, { Fragment, useState } from 'react';
import FiltroActividad from './FiltroActividad';

const FromComponent2 = ({concatenarBusqueda}) => {

  const [ buscar, guardarBuscar ] = useState('');
 // const [ render, imprimirRender ] = useState(false)
  

  const enviarBusqueda = e => {
   e.preventDefault()

   // concatenarBusqueda(buscar);
   
   guardarBuscar('');
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
            placeholder="actividad a buscar"
            value={buscar} 
            onChange={e => guardarBuscar(e.target.value)} 
          />
        </label>
        <input 
          type="submit" 
          className="botonChongo"
          value="Buscar"
          onClick={ () => imprimirRender(true) }
        />
      </form>
      <div>
        
        { render ? <FiltroActividad buscar={buscar} /> : null }
      
      </div>
  

     </Fragment>

   );
}
 
export default FromComponent2