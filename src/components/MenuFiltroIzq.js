import React, { Component } from "react";
import './css/MenuFiltro.css';


class MenuFiltroIzq extends Component {
  
  render() {
    return (
    
<div class="menuFiltro">
   
  <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Dias de Cursada</a>
        </h3>
      </div>
      <div id="collapse1" class="panel-collapse collapse">
        <div class="panel-body">
            <form>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Lunes</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Martes</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Miercoles</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Jueves</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Viernes</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Sabado</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Domingo</label>
                </div>
            </form>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Banda Horaria</a>
        </h3>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body">
            <form>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Mañana</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Tarde</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Noche</label>
                </div>
            </form>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Propuestas</a>
        </h3>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body">
            <form>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Lic. En Informatica</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value=""></input>Tec. en Informatica</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="" ></input>Enfermeria Universitaria</label>
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