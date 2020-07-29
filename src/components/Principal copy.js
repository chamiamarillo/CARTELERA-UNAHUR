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

      <nav className="menuNav">
        <MenuNav />
      </nav>

      <section>
          
        <aside id="izq">
          <MenuFiltroIzq />
        

        

        </aside>

        <aside id="central">
          <Central />
        </aside>

      </section>

      <footer></footer>
      
    </Fragment>
   );
}
 
export default Principal;