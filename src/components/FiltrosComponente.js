import React, { Fragment, useState, useEffect } from 'react';
import { getComisiones } from '../util/services/comision.service'
import { grilla } from '../util/services/grilla.service'
////
import CaracteristicasAulas from './CaracteristicasAulas.js';
import TablaComisiones from './TablaComisiones';
import MaquetaGrilla from './MaquetaGrilla';
////
import './css/FiltrosComponent.css'
import { Checkbox } from 'semantic-ui-react';

/// ver esto para la busqueda de propuesta
// https://material-ui.com/es/components/autocomplete/

const FiltrosComponente = () => {

  const [comisionSelec, setComisionSelec] = useState('')
  // definicion de state para el uso de los filtros
  const [buscarActividad, guardarActividad] = useState('');
  //
  const [dias, setDias] = useState('');

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
    //
    const nvoJson2 = nvoJson.filter(data => (data.horarios.map(hora => hora.dia).indexOf(dias) > -1))

    console.log(nvoJson2)
    console.log("dia elegido ....")
    console.log(dias)

    if (buscarActividad !== ' ') {
      setjsonGrillaFiltrado(grilla(nvoJson, setComisionSelec)) // estoy pasando solo la referencia al seteo del estado
    } else {
      setjsonGrillaFiltrado(grilla(jsonGrilla, setComisionSelec))
    }

  }


  /////////////////////////////////////////.
  /*
  Este debe trabajar con el jsonGrillaFiltrado, pero si el estado esta vasio que use el jsonGrilla
  */
  const mapearDias = (buscarActividad, jsonGrilla) => {

    const nvoJson = jsonGrilla.filter(data => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1))
    //
    const nvoJson2 = nvoJson.filter(data => (data.horarios.map(hora => hora.dia).indexOf(dias) > -1))

    //console.log(nvoJson2)
    console.log("dia elegido ....")
    console.log(dias)

    if (buscarActividad !== ' ') {
      setjsonGrillaFiltrado(grilla(nvoJson2, setComisionSelec)) // estoy pasando solo la referencia al seteo del estado
    } else {
      setjsonGrillaFiltrado(grilla(jsonGrilla, setComisionSelec))
    }

  }

  console.log("menu filtro izquierdo");
  console.log(dias);
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


      <div className="visual">
        <>

          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Dias de cursada
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <form  >
                    <div className="checkbox">

                      <label><input type="checkbox" value="Lunes" onChange={(e) => setDias(e.target.value)}></input>Lunes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value="Martes" onChange={(e) => setDias(e.target.value)}></input>Martes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value="Miercoles" onClick={(e) => setDias(e.target.value)}></input>Miercoles</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value="Jueves" onClick={(e) => setDias(e.target.value)}></input>Jueves</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value="Viernes" onClick={(e) => setDias(e.target.value)}></input>Viernes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value="Sabado" onClick={(e) => setDias(e.target.value)}></input>Sabado</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="panel-group" >
            <div className="panel">
              <div className="panel-heading">
                
                  <input
                    type="submit"
                    className="botonActividad"
                    value="Buscar"
                    onClick={() => mapearDias(buscarActividad, jsonGrillaOriginal)}
                  />
              
              </div>
            </div>
          </div>
        </>
      </div>



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