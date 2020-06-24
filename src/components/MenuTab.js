import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Central from './Central';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default class MenuTab extends Component {

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.enviar = this.enviar.bind(this);

        this.state = {
            activeItem: '',
            estado:''
        }
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name} );

  enviar = (e, {activeItem}) => this.state.activeItem
  render() {
    const { activeItem } = this.state
    let estado =this.state.activeItem
    return (


      <div>

        <Menu attached='top' position='right' tabular>
          <Menu.Item
            name='Asignar'
            active={activeItem === 'Asignar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Crear Estudiante'
            active={activeItem === 'Crear Estudiante'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='Menu Principal'
            active={activeItem === 'Menu Principal'}
            href="/"
          />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}