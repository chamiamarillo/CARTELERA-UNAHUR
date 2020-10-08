import React, { Fragment } from 'react';

const CaractiristicasAulas = ({comisionSelec}) => {

    let seleccion = JSON.stringify(comisionSelec);

    return (  

        <Fragment>
          
        <div>
          <h5>Seleccione carateristicas necesarias de las aulas:</h5>
          </div>
          <div >
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
          <input type="checkbox" id="inlineCheckbox5" value="option5"></input>
          <label>Mesas de Taller </label></div>
          <br></br>
          <label>{seleccion}</label>
        
          </div>
      </Fragment>

    );
}
 
export default CaractiristicasAulas;