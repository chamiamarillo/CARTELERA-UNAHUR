import React, { Fragment, useState } from 'react';
import FiltroActividad from './FiltroActividad';
import { useEffect } from 'react';

const FormComponent2 = () => {

  const [ buscar, guardarBuscar ] = useState('');
  

  const enviarBusqueda = e => {
    e.preventDefault()

    //concatenarBusqueda(buscar);
   
    guardarBuscar('');
  }

  return ( 
    <Fragment>
      <form onSubmit={enviarBusqueda} >
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
        />
      </form>
      <div>
      <FiltroActividad
        buscar={buscar}
      />
        </div>
     </Fragment>

   );
}
 
export default FormComponent2