import React, { Fragment, Component } from 'react';
import DatatablePage from './DatatablePage';

import Asignar from "./Asignar";
import Prueba3 from './Prueba3';

class Central extends Component {

    renderSwitch(mostrar) {
        
        switch (mostrar) {
          case 'Asignacion':
            return <Asignar />;
          case 'Modificacion':
            return <DatatablePage /> ;
          case 'Consulta':
            return <Prueba3 />
          default:
            return ;
        }
    }

    render() {
        const mostrar = this.props.mostrar;
     
        return ( 

            <Fragment>           
                <article>
                    {this.renderSwitch(mostrar)}
                </article>
            </Fragment>
        );
    }
}
 
export default Central;