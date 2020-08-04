import React, { Fragment } from 'react';

/******* COMPONENTES */
import MenuFiltroIzq from "./MenuFiltroIzq"; // Filtro del costado días - banda horaria - propuesta
import MenuNav from './MenuNav'; // menu superior asignar - crear est. - menu principal
import HeaderLogoTitulo from './HeaderLogoTitulo'; // final logo y titulo - A FUTURO TERMINAR LOGUIN - 
import Central from './Central'; // pantalla central de interaccion segun la eleccion del menu

/****************** */


const Principal = () => {
  return ( 

    <Fragment>
      <header>
        <HeaderLogoTitulo />
      </header>
      <div className="nuevo-estilo">
        <nav className="menuNav">
          <MenuNav />
        </nav>
      </div>
      <section>
        <div className="visual">  
          <div className="izq">
            <MenuFiltroIzq />
          </div>

          <div className="central">
            <Central />
          </div>
        </div>
      </section>

      <footer></footer>
      
    </Fragment>
   );
}
 
export default Principal;