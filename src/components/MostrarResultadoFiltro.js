import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class MostrarResultadoFiltro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentWillReceiveProps() {    
  
    let result = this.props.result;
    this.setState({
      isLoaded: true,
      items: result
    });
  }


  armado(mierda) {

    return (
      <MDBDataTable
        striped
        bordered
        small
        data={mierda}
      />
    );
  }

  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Cargando listado...</div>;
    } else {
      return (
        <div>
          {this.armado(this.props.result)}    
             
          
        </div>
      );

    }
  }
}

export default MostrarResultadoFiltro;