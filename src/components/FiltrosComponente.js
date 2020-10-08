import React, { Fragment, useState, useEffect } from 'react';
import { getComisiones } from '../util/services/comision.service'
import { grilla } from '../util/services/grilla.service'
////
import CaracteristicasAulas from './CaracteristicasAulas.js';
import TablaComisiones from './TablaComisiones';
import MaquetaGrilla from './MaquetaGrilla';
////
import './css/FiltrosComponent.css'
//import { Checkbox } from 'semantic-ui-react';

/// ver esto para la busqueda de propuesta
// https://material-ui.com/es/components/autocomplete/

const FiltrosComponente = () => {

  const [comisionSelec, setComisionSelec] = useState('')
  // definicion de state para el uso de los filtros
  const [buscarActividad, guardarActividad] = useState('');
  //
  const [dias, setDias] = useState([]);

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


  const guardarDias = e => {
        
    setDias([
      ...dias,
      e.target.value
    ]);
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
    var i
    var nvoJson2
    for (i=0; i<=dias.length-1; i++) {
      nvoJson2 = nvoJson.filter(data => (data.horarios.map(hora => hora.dia).indexOf(dias[i]) > -1))
    }
    //console.log(nvoJson2)
    console.log("dia elegido ....")
    console.log(dias)
  
    if (buscarActividad !== ' ') {
      setjsonGrillaFiltrado(grilla(nvoJson2, setComisionSelec)) // estoy pasando solo la referencia al seteo del estado
    } else {
      setjsonGrillaFiltrado(grilla(jsonGrilla, setComisionSelec))
    }

    // vuelvo al estado inicial del array
    setDias([])
    var control1 = document.getElementById("ch001")
    var control2 = document.getElementById("ch002")
    var control3 = document.getElementById("ch003")
    var control4 = document.getElementById("ch004")
    var control5 = document.getElementById("ch005")
    var control6 = document.getElementById("ch006")
    //console.log("ver propiedad")
    //console.log(control)
   if(control1 || control2 || control3 || control4 || control5 || control6) { 
     control1.checked=false;
     control2.checked=false;
     control3.checked=false;
     control4.checked=false;
     control5.checked=false;
     control6.checked=false;
    }
   
  }




  console.log("menu fliltro izquierdo");
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
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h2>DIAS DE CURSADA</h2>
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <form >
                    <div className="checkbox" >
                      <label><input type="checkbox" id="ch001" value="Lunes" onChange={guardarDias} ></input>Lunes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="ch002" value="Martes" onChange={guardarDias}></input>Martes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="ch003" value="Miercoles" onClick={guardarDias}></input>Miercoles</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="ch004" value="Jueves" onClick={guardarDias}></input>Jueves</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="ch005" value="Viernes" onClick={guardarDias}></input>Viernes</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="ch006" value="Sabado" onClick={guardarDias}></input>Sabado</label>
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
