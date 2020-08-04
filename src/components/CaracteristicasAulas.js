import React, { Fragment, Component } from 'react';

class CaracteristicasAulas extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: [1, 3]
      };
    }
  
    handleChange(e) {
      this.setState({ value: e });
    }
  
    render() {
      return (
    <Fragment>
        <div>
        Seleccione carateristicas necesarias de las aulas:
        </div>           
        <div class="checkbox checkbox-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1"></input>
            <label>Televisor </label>
        </div>

        <div class="checkbox checkbox-inline">
            <input type="checkbox" id="inlineCheckbox2" value="option2"></input>
            <label for="inlineCheckbox2">Acceso Internet </label>
        </div>
        <div class="checkbox checkbox-inline">
            <input type="checkbox" id="inlineCheckbox3" value="option3"></input>
            <label for="inlineCheckbox3">Acceso Silla de Ruedas </label>
        </div>
        <div class="checkbox checkbox-inline">
            <input type="checkbox" id="inlineCheckbox4" value="option4"></input>
            <label for="inlineCheckbox4">Proyector</label>
        </div>
        <div class="checkbox checkbox-inline">
            <input type="checkbox" id="inlineCheckbox5" value="option4"></input>
            <label for="inlineCheckbox5">Mesas de Taller </label>
            </div>
    </Fragment>

      )
    }
  }

  
export default CaracteristicasAulas;