import React, { Component } from "react";
import './css/MenuFiltroIzq.css';

class MenuFiltroIzq extends Component {
  render() {
    return (
      <div className="menuFiltro" id="menuFiltro">

        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div id="a" className="panel-heading">
              <h3 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Dias de Cursada</a>
              </h3>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">
                <form>
                  <div className="checkbox">

                    <label><input type="checkbox" value=""></input>Lunes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Martes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Miercoles</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Jueves</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Viernes</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Sabado</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Domingo</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div id="a" className="panel-heading">
              <h3 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Banda Horaria</a>
              </h3>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <div className="panel-body">
                <form>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Mañana</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Tarde</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Noche</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div  className="panel panel-default" >
            <div id="a" className="panel-heading"  >
              <h3 className="panel-title" >
                <a  data-toggle="collapse" data-parent="#accordion" href="#collapse3">Propuestas</a>
              </h3>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <div className="panel-body">
                <form>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Tec. En Informatica</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Lic. en Informatica</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Enfermeria Universitaria</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value=""></input>Ingeniería Metalúrgica</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" value="" ></input>Ingeniería Eléctrica</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuFiltroIzq;