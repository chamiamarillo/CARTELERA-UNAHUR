import React from 'react';

const MenuFiltroIzq = () => {
    return (
        <>
        <div className="panel-group" >
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">
                <a >Dias de Cursada</a>
              </h3>
            </div>
            <div >
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
            <div className="panel-heading" >
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
          <div className="panel panel-default">
            <div className="panel-heading" id="B">
              <h3 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Propuestas</a>
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

   <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Dias de cursada
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        

        uno codigo
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>



      </>
      

    );
}

export default MenuFiltroIzq;