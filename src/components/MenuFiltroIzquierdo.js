import React,{ Fragment } from "react";
import './css/MenuFiltroIzq.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MenuFiltroIzquierdo = () => {
    return (
      <Fragment className="menuFiltro" id="menuFiltro">

        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading" id="a">
              <h3 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Dias de Cursada</a>
              </h3>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">
                <form>
                <BrowserRouter> 
                <Switch>
                     <Route exact path="/DiasDeCursada"  />
                     <Route exact path="/BandaHoraria"  />
                     <Route exact path="/Propuestas"  />
                 </Switch>
                </BrowserRouter>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  
}

export default MenuFiltroIzquierdo;