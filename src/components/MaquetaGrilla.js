import React, { useState, useEffect, Fragment } from "react";
import { Dropdown } from 'semantic-ui-react'
import { getEdificios } from '../util/services/edificios.service';
import { getAulasXEdif } from '../util/services/aulasXEdificios.service';
import './css/MaquetaGrilla.css';
//import Edificios from "./Edificios";
//import AulasPorEdificio from './AulasPorEdificio';

const MaquetaGrilla = ({caractAulas}) => {

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

  const mierda2 = mierda.filter(c => c.carac.some(element => {
    element.includes(caractAulas)
  }))  

  //console.log(auXEdif)
  console.log(mierda2)
  


  return (
    <Fragment>

      <div className="containerGrilla">

        <div>
          <nav id="dias_asignacion_check">
            <div className="btn-dias">
              <button id="btn-dias"> <h4 className="btn-dias"> Lunes</h4> </button>
              <button id="btn-dias"> <h4 className="btn-dias"> Viernes </h4> </button>
            </div>

            <div className="labelA"><label> <h4> Tipo de asignación: </h4> </label>
              <div className="labelB">
                <ul>
                  <li className="li"><label><input type="checkbox" value=""></input>Provisorio</label></li>
                  <li className="li"><label><input type="checkbox" value=""></input>Permanente</label></li>
                </ul></div></div>

            <div>
              <Dropdown
                placeholder='Select Country'
                //fluid
                search
                selection
                options={sede}
                onChange={(opt, meta) => setEdifSelect(meta.value)}
              />

              {/*
                sede.map(elemento => (
                  <option key={elemento.valor} value={elemento.valor} onChange={e => setEdificacion(e.select)} >{elemento.name}</option>
                  )
                )
                */}

            </div>
            <div> <p className="labelA"> Mostrar aulas con las categorías disponibles?</p>
              <button className="btn-mostrar"> <h4> Mostrar</h4> </button></div>

          </nav>
        </div>
      </div>
      <div id="clasedeclase" >
        <div id="classSection">
          <div id="aulas_grilla1"><div> AULAS: </div>

            {
              mierda.map(elemento => (
                <li className="btn-mostrarAula">{elemento.aula}</li>
              ))
            }

          </div>
        </div>

        <div id="classSection2">
          <div id="divPe">
            <p>|  07:00  |</p><p>  08: 00  |</p><p>  09:00  |</p> <p>  10:00  |</p><p> 11:00  |</p><p> 12:00  |</p><p> 13:00  |</p><p> 14:00  |</p><p> 15:00  |</p><p> 16:00  |</p>
            <p> 17:00  |</p><p> 18:00  |</p><p> 19:00  |</p><p> 20:00  |</p><p> 21:00  |</p><p> 22:00  |</p></div>
          <ol className="aulas_grilla2">
            <li className="efectoAzul"></li>
            <li className="efectoGris"></li>
            <li className="efectoAzul"></li>
            <li className="efectoGris"></li>
            <li className="efectoAzul"></li>
          </ol>
        </div>

      </div>
    </Fragment>

  );
}

export default MaquetaGrilla