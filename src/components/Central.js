import React, { Fragment, Component } from 'react';

import Asignar from "./Asignar";
import FiltroActividad from './FiltroActividad';
import MaquetaGrilla from './MaquetaGrilla';

class Central extends Component {

    renderSwitch(mostrar) {
        
        switch (mostrar) {
          case 'Asignacion':
            return <Asignar /> ;
          case 'Modificacion':
            return <FiltroActividad />;
          case 'Consulta':
            return <MaquetaGrilla />
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