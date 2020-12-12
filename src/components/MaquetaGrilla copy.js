import { data } from "jquery";
import React, { useState, useEffect, Fragment } from "react";
import {getAulasEdificioCarac} from '../util/services/AulasEdificioCarac.service';
import './css/MaquetaGrilla.css';

const MaquetaGrilla = () => {

  const [jsonAulasEdificiosCarac, setJsonAulasEdificosCarac] = useState([]);
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    getAulasEdificioCarac().then(rest => setJsonAulasEdificosCarac(rest));
  }, []);


  const ed = jsonAulasEdificiosCarac.map(data => (
    {
      name: data.edificio.nombre,
      value: data.edificio.edificacion
    }
  ))

 

  //console.log(jsonAulasEdificiosCarac);
  console.log("---------------------")
  console.log(ed)



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

            <select id="desplegableInstitutos" name="OS" >
              <option selected value="1"> Malvinas Argentinas</option>
              <option value="2">Origone A </option>
              <option value="3">Origone B</option>
              <option value="4">Sede Vergara</option>
              <option value="5">Chuquisaca</option>
            </select>
            <div> <p className="labelA"> Mostrar aulas con las categorías disponibles?</p>
              <button className="btn-mostrar"> <h4> Mostrar</h4> </button></div>

          </nav>
        </div>
      </div>
      <div id="clasedeclase" >
        <div id="classSection">
          <div id="aulas_grilla1"><div> AULAS: </div>
            <li className="btn-mostrarAula">AULA 1</li>
            <li className="btn-mostrarAula">AULA 2</li>
            <li className="btn-mostrarAula">AULA 3</li>
            <li className="btn-mostrarAula">AULA 4</li>
            <li className="btn-mostrarAula">AULA 5</li>
          </div>
        </div>

        <div id="classSection2">
          <div id="divPe">  <p>|  07:00  |</p><p>  08: 00  |</p><p>  09:00  |</p> <p>  10:00  |</p><p> 11:00  |</p><p> 12:00  |</p><p> 13:00  |</p><p> 14:00  |</p><p> 15:00  |</p><p> 16:00  |</p>
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