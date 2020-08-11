import React, { Fragment, Component } from 'react';
import DatatablePage from './DatatablePage';

import Asignar from "./Asignar";

class Central extends Component {

    renderSwitch(mostrar) {
        
        switch (mostrar) {
          case 'Asignacion':
            return <Asignar />;
          case 'Modificacion':
            return <DatatablePage /> ;
          case 'Consulta':
            return;
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