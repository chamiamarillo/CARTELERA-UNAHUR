import React, { useState, useEffect, Fragment } from "react";
import { Dropdown } from 'semantic-ui-react'
import { getEdificios } from '../util/services/edificios.service';
import { getAulasXEdif } from '../util/services/aulasXEdificios.service';
import './css/MaquetaGrilla.css';
//import Edificios from "./Edificios";
//import AulasPorEdificio from './AulasPorEdificio';

const MaquetaGrilla = ({ caractAulas }) => {

  const [jsonEdificios, setJsonEdificos] = useState([]);
  const [jsonAulasXEdif, setJsonAulasXEdif] = useState([])
  const [edifSelect, setEdifSelect] = useState(null);

  useEffect(() => {
    getEdificios().then(rest => setJsonEdificos(rest));
    getAulasXEdif().then(rest => setJsonAulasXEdif(rest));
  }, []);


  const sede = jsonEdificios.map(data => (
    {
      text: data.edificacion_nombre,
      value: data.edificacion,
    }
  ))

  const auXEdif = jsonAulasXEdif.map(data => (
    {
      espacio: data.espacio,
      aula: data.nombre,
      capacidad: data.capacidad,
      edificio: data.edificio.edificacion,
      carac: data.caracteristicas.map(cc => cc.ampliacion_tipo),
      caracNombre: data.caracteristicas.map(cc => cc.nombre_ampliacion)
    }
  ))

  const mierda = auXEdif.filter(e => e.edificio === edifSelect)

  /*  
    const mierda2 = mierda.filter(c => c.carac.foreach(e => 
      {
        edifSelect.foreach(ee => 
          {
            ee.id === e.ampliacion_tipo
        })
    }))  
  */

  //console.log(auXEdif)
  console.log(caractAulas)


  return (
    <Fragment>

      <div className="containerGrilla">

        <div>
          <nav id="dias_asignacion_check">

            <div className="labelA"><label>Tipo de asignación: </label>
              <div className="labelB">
                <li ><label><input type="radio" value=""></input>Provisorio</label></li>
                <li ><label><input type="radio" value=""></input>Permanente</label></li>
              </div>
            </div>

            <label id="elegirEdificio" >Elegir Edificio: </label>
              <Dropdown id="efectoEdificio"
                placeholder='Seleccionar edificio'
                //fluid
                search
                selection
                options={sede}
                onChange={(opt, meta) => setEdifSelect(meta.value)}
              />

          </nav>
        </div>
      </div>

      <div id="clasedeclase" >
        <div id="classSection">
          <div id="aulas_grilla1"><div> AULAS: </div>

            {
              mierda.map(elemento => (
                <ul id="btn-mostrarAula">{elemento.aula}</ul>
              ))
            }
          </div>
        </div>

        <div id="classSection2">
          <div id="divPe">
            <p>|  07:00  |</p><p>  08: 00  |</p><p>  09:00  |</p> <p>  10:00  |</p><p> 11:00  |</p><p> 12:00  |</p><p> 13:00  |</p><p> 14:00  |</p><p> 15:00  |</p><p> 16:00  |</p>
            <p> 17:00  |</p><p> 18:00  |</p><p> 19:00  |</p><p> 20:00  |</p><p> 21:00  |</p><p> 22:00  |</p></div>
          <ol className="aulas_grilla2">
            {
              mierda.map(elemento => (
                <ul className="efectoAzul">{elemento.length}</ul>
              ))
            }
          </ol>
        </div>
      </div>
    </Fragment>

  );
}

export default MaquetaGrilla