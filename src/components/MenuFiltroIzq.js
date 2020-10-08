import React from 'react';

const MenuFiltroIzq = () => {
    return (
        <>

  <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Dias de cursada
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Banda Horaria
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Propuesta
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
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



      </>
      

    );
}

export default MenuFiltroIzq;