import React, { Fragment } from "react";
import './css/MaquetaGrilla.css';

const MaquetaGrilla = () => {

  return (
    <Fragment>
      <div id="containerGrilla">

            <div id="btn-dias-inline">
              <button id="btn-dias"> Lunes </button>
              <button id="btn-dias"> Viernes </button>
            </div>
          
            <div id="tipoAsignacion">Tipo de asignación:
              
                <label ><input id="ch1" type="checkbox" value=""></input>Provisorio</label>
                
                <label ><input  id= "ch2" type="checkbox"  value=""></input>Permanente</label>
                
            </div>

            <div id="desplegableInst">
            <select id="desplegableInstitutos" name="OS" >
              <option selected value="1"> Malvinas Argentinas</option>
              <option value="2">Origone A </option>
              <option value="3">Origone B</option>
              <option value="4">Sede Vergara</option>
              <option value="5">Chuquisaca</option>
            </select>
            </div>

            <div id="mostrarDisponible" > Mostrar aulas con las categorías disponibles?
              <button className="btn-mostrar"> Mostrar </button>
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
      <p></p>
    </Fragment>

  );
}

export default MaquetaGrilla