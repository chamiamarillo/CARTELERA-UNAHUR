import React, { Fragment } from 'react';
import  './css/CaracteristicasAulas.css'

const CaractiristicasAulas = ({comisionSelec}) => {

    let seleccion = JSON.stringify(comisionSelec);

    return (  

        <Fragment>
        <label id="labelCaracteristicas">
        <div id="titulo">
          Seleccione carateristicas necesarias de las aulas:
          </div>

        <div className="checkbox checkbox-inline">
        <label> <input type="checkbox" id="inlineCheckbox1" value="option1"></input>
          Televisor </label>
        </div>

        <div className="checkbox checkbox-inline">
        <label> <input type="checkbox" id="inlineCheckbox2" value="option2"></input>
          Acceso Internet </label>
        </div>

        <div className="checkbox checkbox-inline">
        <label> <input type="checkbox" id="inlineCheckbox3" value="option3"></input>
         Acceso Silla de Ruedas </label>
        </div>
        <div className="checkbox checkbox-inline">
        <label><input type="checkbox" id="inlineCheckbox4" value="option4"></input>
          Proyector </label>
        </div>
        <div className="checkbox checkbox-inline">
        <label><input type="checkbox" id="inlineCheckbox5" value="option4"></input>
          Mesas de Taller </label>
         
        </div>
        </label>
        <br></br>
          <div className="seleccionado"><label >{seleccion}</label></div>

      </Fragment>


    );
}
 
export default CaractiristicasAulas;