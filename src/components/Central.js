import React, { Fragment, Component } from 'react';

//import Asignar from "./Asignar";
//import FetchJson from './FetchJson';
import FiltrosComponente from './FiltrosComponente';

class Central extends Component {

    renderSwitch(mostrar) {
        
        switch (mostrar) {
          case 'Asignacion':
            return <FiltrosComponente />;
          case 'Modificacion':
            return;
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