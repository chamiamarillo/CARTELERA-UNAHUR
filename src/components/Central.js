import React, { Fragment, Component } from 'react';

import Asignar from "./Asignar";
import CrearEstudiantes from "./CrearEstudiantes";
import { render } from '@testing-library/react';

class Central extends Component {

    renderSwitch(mostrar) {
        
        switch (mostrar) {
          case 'Asignar':
            return <Asignar />;
          case 'Crear Estudiante':
            return <CrearEstudiantes />
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