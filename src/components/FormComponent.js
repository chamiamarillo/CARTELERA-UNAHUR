import React, { Fragment, Component } from 'react';

class FormComponent extends Component {

    state = {
        value: ''
    }

    // evento que recibe la informacion del imput
    handleChange(e) {this.setState({value: e.target.value})}

    // evento que maneja el click del boton submit
    handleSubmit() { console.log('submitted: ' + this.state.value) }

    render() {
      return (
        <Fragment>
          <label>
            {'Actividad: '} {/* el texto del label para poder tener un espacio */}
            <input 
                type="text" 
                name="actividad" 
                onChange={(e)=>this.handleChange(e)} 
            />
          </label>
          <input 
            type="submit" 
            value="Buscar" 
            onClick={()=>this.handleSubmit()}
          />
        </Fragment>
      )
    }
}

export default FormComponent



