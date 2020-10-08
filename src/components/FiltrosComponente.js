import React, { Fragment, useState, useEffect } from 'react';
import { getComisiones } from '../util/services/comision.service'
import { grilla } from '../util/services/grilla.service'
////
import CaracteristicasAulas from './CaracteristicasAulas.js';
import TablaComisiones from './TablaComisiones';
import MaquetaGrilla from './MaquetaGrilla';
////
import './css/FiltrosComponent.css'



const FiltrosComponente = () => {

  const [comisionSelec, setComisionSelec] = useState('')
  // definicion de state para el uso de los filtros
  const [buscarActividad, guardarActividad] = useState('');
 
  // estado para trabajar con los json
  const [jsonGrillaOriginal, setjsonGrillaOriginal] = useState([])
  const [jsonGrillaFiltrado, setjsonGrillaFiltrado] = useState(null)

  useEffect(() => {
    getComisiones().then(rest => setjsonGrillaOriginal(rest));
  }, [])

  const enviarBusqueda = e => {
    e.preventDefault()

    // recetear el formulario
    guardarActividad('');
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Guardamos el resultado de la busqueda en un nuevo json                                                                                                     //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const mapearActividad = (buscarActividad, jsonGrilla) => {

    const nvoJson = jsonGrilla.filter(data => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1))

    if (buscarActividad !== ' ') {
      setjsonGrillaFiltrado(grilla(nvoJson, setComisionSelec)) // estoy pasando solo la referencia al seteo del estado
    } else {
      setjsonGrillaFiltrado(grilla(jsonGrilla, setComisionSelec))
    }

  }

  //console.log("menu fliltro izquierdo");
  //console.log(check);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  console.log(comisionSelec)

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
            onClick={() => mapearActividad(buscarActividad, jsonGrillaOriginal)}
          /></li>
      </form>
      <p></p>

      <div>
        <TablaComisiones
          jsonGrillaFiltrado={jsonGrillaFiltrado}
        />
      </div>
      <p></p>
      <div>
        <CaracteristicasAulas 
        comisionSelec={comisionSelec}
        />
      </div>
      <div>
        <MaquetaGrilla />
      </div>


    </Fragment>

  );
}

export default FiltrosComponente
