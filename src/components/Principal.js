  import React, { Fragment } from 'react';

  /******* COMPONENTES */
  import MenuFiltroIzq from "./MenuFiltroIzq"; // Filtro del costado días - banda horaria - propuesta
  import MenuTab from "./MenuTab"; // menu superior asignar - crear est. - menu principal
  import LogoUsuario from './LogoUsuario'; // por ahora logo y titulo
  import Central from './Central'; // pantalla central de interaccion segun la eleccion del menu

  /****************** */

  const Principal = () => {
    return ( 
      <Fragment>
          <div>
          <header>
            <LogoUsuario />
          </header>

          <nav>
            <MenuTab />
          </nav>

          <section>
            <aside id="izq"><MenuFiltroIzq /></aside>
            <article><Central /></article>
          </section>

          <footer></footer>
          </div>
        </Fragment>
    );
  }
  
  export default Principal;