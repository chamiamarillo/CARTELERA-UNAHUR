import React, { Component } from "react";
import './css/MenuFiltroIzq.css';

class MenuFiltroIzq extends Component {
  render() {
    return (
      <>

        <div className="panel-group" >
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Dias de Cursada</a>
              </h3>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">
                <form>
                  <div className="checkbox">

                    <label><input type="checkbox" value="Lunes"></input>Lunes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="Martes"></input>Martes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="Miercoles" ></input>Miercoles</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="Jueves" ></input>Jueves</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="Viernes" ></input>Viernes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="Sabado" ></input>Sabado</label>
                  </div>
                </form>
              </div>
            </div>
          
          </div>
        </div>
      </>
    )
  }
}

export default MenuFiltroIzq;