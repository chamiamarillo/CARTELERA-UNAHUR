import React, { Fragment } from 'react';

/******* COMPONENTES */
//import MenuFiltroIzq from "./MenuFiltroIzq"; // Filtro del costado días - banda horaria - propuesta
import HeaderLogoTitulo from './HeaderLogoTitulo'; // final logo y titulo - A FUTURO TERMINAR LOGUIN - 
//import Central from './Central'; // pantalla central de interaccion segun la eleccion del menu
/****************** */

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FiltrosComponente from './FiltrosComponente';
import Propuestas from './Propuestas';
import Menu from './Menu';
import Edificios from './Edificios';
import Display from './Display';

const Principal = () => {
  return (

    <Fragment>
      <header>
        <HeaderLogoTitulo />
      </header>
      <p></p>
          <BrowserRouter>
            <div>
                <div className="App">
                    <div className="container-fluid">
                        <Menu />
                        <br />
                    </div>
                    <ul className="nav justify-content-center">
                        <div className="container">
                            <Switch>
                                <Route exact path="/"  />
                                <Route exact path="/Asignacion" component={FiltrosComponente}  />
                                <Route exact path="/Modificacion" component={Propuestas} />
                                <Route exact path="/Consulta" component={Edificios} />
                                <Route exact path="/Reporte"  />
                                <Route exact path="/Salir"  component={Display}/>
                            </Switch>
                        </div>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    </Fragment>
  );
}

export default Principal;