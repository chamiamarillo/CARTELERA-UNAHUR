import React, { Fragment, Component } from 'react';
import FiltrosComponente from './FiltrosComponente';
import Prueba from './Prueba';





class Central extends Component {

  renderSwitch(mostrar) {

    switch (mostrar) {
      case 'Asignacion':
        return <FiltrosComponente />;
      case 'Modificacion':
        return <Prueba />;
      case 'Consulta':
        return;
      default:
        return;
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