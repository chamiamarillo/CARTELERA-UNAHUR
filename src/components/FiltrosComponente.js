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


import Accordion from 'react-bootstrap/Accordion'
import { Card, Button } from 'react-bootstrap';
import Propuesta from './Propuestas';
//import { AccordionCollapse, Card, Button } from 'react-bootstrap';
//import { Collapse } from 'bootstrap';
//import { showMenu } from 'react-contextmenu';
// usado de: https://react-bootstrap.github.io/components/accordion/


const FiltrosComponente = ({mierda}) => {

  const [comisionSelec, setComisionSelec] = useState('');

  // definicion de estado para el uso de los filtros a buscar
  const [buscarActividad, guardarActividad] = useState('');

  // definicion de estados para los filtro de dias y franja horaria
  const [dias, setDias] = useState([]);
  const [franja, setFranja] = useState('')

  // estado para trabajar con los json
  const [jsonGrillaOriginal, setjsonGrillaOriginal] = useState([])
  const [jsonGrillaFiltrado, setjsonGrillaFiltrado] = useState(null)

  useEffect(() => {
    getComisiones().then(rest => setjsonGrillaOriginal(rest));
  }, [])

  console.log("-------------------------------------")
  console.log()

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
  /*
    const mapearActividad = (buscarActividad, jsonGrilla) => {
  
      const nvoJson = jsonGrilla.filter(data => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1))
      //
     // const nvoJson2 = nvoJson.filter(data => (data.horarios.map(hora => hora.dia).indexOf(dias) > -1))
  
      console.log(nvoJson2)
      console.log("dia elegido ....")
      console.log(dias)
  
      if (buscarActividad !== ' ') {
        setjsonGrillaFiltrado(grilla(nvoJson, setComisionSelec)) // estoy pasando solo la referencia al seteo del estado
      } else {
        setjsonGrillaFiltrado(grilla(jsonGrilla, setComisionSelec))
      }
    }
  */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Este debe trabajar con el jsonGrillaFiltrado, pero si el estado esta vasio que use el jsonGrilla
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const mapearDiasYFranja = (buscarActividad, jsonGrilla) => {

    //const nvoJson = jsonGrilla.filter(data => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1))
    // validad busqueda de actividad por vacio
    
    var nvoJson
    
    if (buscarActividad == '') {
      nvoJson = jsonGrilla
    }
    else {
      nvoJson = jsonGrilla.filter(data => (data.actividad.nombre.toLowerCase().indexOf(buscarActividad.toLowerCase()) > -1))
    }
    
    ///////////////////////////////

    //nvoJson = jsonGrilla.filter(data => (data.propuestas.id_propuesta == mierda[0]))  









    //// ver de cargar un condicional para los filtros combinados de dias y franja horaria!!!!
    if (dias.length != 0) {

      var nvoJson2
      for (let i = 0; i <= dias.length - 1; i++) {
        nvoJson2 = nvoJson.filter(data => (data.horarios.map(hora => hora.dia).indexOf(dias[i]) > -1))
      }

      nvoJson = nvoJson2

    }
    //// esta validazion es necesaria para mezclar los filtros tanto del dia con el de la franja

    //var nvoJson3

    // if (dias.length == 0) {
    // nvoJson2 = nvoJson
    //}
    if (franja != '') {
      nvoJson2 = nvoJson.filter(data => data.turno.turno == franja)
      nvoJson = nvoJson2
    }
    // else 
    //   {
    //     nvoJson3 = nvoJson2
    //}

    setjsonGrillaFiltrado(grilla(nvoJson, setComisionSelec))

    // vuelvo al estado inicial del array
    setDias([])
    setFranja('')

    // Esto sirve para limpiara las opciones de los filtro tanto de los dias como de la franja horaria.
    var control1 = document.getElementById("ch001")
    var control2 = document.getElementById("ch002")
    var control3 = document.getElementById("ch003")
    var control4 = document.getElementById("ch004")
    var control5 = document.getElementById("ch005")
    var control6 = document.getElementById("ch006")
    var control7 = document.getElementById("fr001")
    var control8 = document.getElementById("fr002")
    var control9 = document.getElementById("fr003")
    var collapDia = document.getElementById("cllpdias") // para cerrar el acordeon de dia
    var collapFranja = document.getElementById("cllpfranja") // para cerrar el acordeon de franja horaria

    // Si alguno esta seleccionado destilda todos y cierra el acordeon en caso de que este abierto.
    if (control1 || control2 || control3 || control4 || control5 || control6 || control7 || control8 || control9) {
      control1.checked = false;
      control2.checked = false;
      control3.checked = false;
      control4.checked = false;
      control5.checked = false;
      control6.checked = false;
      control7.checked = false;
      control8.checked = false;
      control9.checked = false;
      collapDia.className = "collapse"; // para cerrar el acordeon dias
      collapFranja.className = "collapse"; // para cerrar acordeon franja horaria
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
            <h4>
            {'Actividad: '} {/* el texto del label para poder tener un espacio */}
            </h4>
            <input
              type="text"
              className="actividad"
              id="efectoGris"
              placeholder="Buscar por Actividad"
              value={buscarActividad}
              onChange={e => guardarActividad(e.target.value)}
            />
          </label>
          {/*
          <input
            type="submit"
            className="botonActividad"
            value="Buscar"
          //onClick={() => mapearActividad(buscarActividad, jsonGrillaOriginal)}
          /> */}</li>
      </form>

      <form
        id='formPropuesta'
        //onSubmit={enviarBusqueda}
      ><li id="pPropuesta">
          <label>
            <h4>
            {'Propuesta: '} {/* el texto del label para poder tener un espacio */}
            </h4>
            <Propuesta />
          </label>
         </li>
      </form>
      <p></p>


      <div className="visual">
        <>
          <Accordion >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <h3>DIAS DE CURSADA</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0" id="cllpdias">
                <Card.Body>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h3>FRANJA HORARIA</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1" id="cllpfranja">
                <Card.Body>
                  <form >
                    <div className="checkbox" >
                      <label><input type="checkbox" id="fr001" value="1" onClick={e => setFranja(e.target.value)} ></input>Mañana</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="fr002" value="2" onClick={e => setFranja(e.target.value)} ></input>Tarde</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" id="fr003" value="3" onClick={e => setFranja(e.target.value)} ></input>Noche</label>
                    </div>
                  </form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <div className="panel-group" >
            <div className="panel">
              <div className="panel-heading">
                <input
                  type="submit"
                  className="botonActividad"
                  value="Buscar"
                  onClick={() => mapearDiasYFranja(buscarActividad, jsonGrillaOriginal)}
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
