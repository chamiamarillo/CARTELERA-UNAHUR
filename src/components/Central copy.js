import React, { Fragment, Component } from 'react';
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