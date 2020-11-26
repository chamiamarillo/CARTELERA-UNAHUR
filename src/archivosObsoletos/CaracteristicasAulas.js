import React, { Fragment } from 'react';

const CaractiristicasAulas = ({comisionSelec}) => {

    let seleccion = JSON.stringify(comisionSelec);

    return (  

        <Fragment>
        <div>
          Seleccione carateristicas necesarias de las aulas:
          </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox1" value="option1"></input>
          <label>Televisor </label>
        </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox2" value="option2"></input>
          <label>Acceso Internet </label>
        </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox3" value="option3"></input>
          <label>Acceso Silla de Ruedas </label>
        </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox4" value="option4"></input>
          <label>Proyector</label>
        </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox5" value="option4"></input>
          <label>Mesas de Taller </label>
          <br></br>
          <br></br>
          <label>{seleccion}</label>
        </div>
      </Fragment>


    );
}
 
export default CaractiristicasAulas;