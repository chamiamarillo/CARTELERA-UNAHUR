import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Central from './Central';

/***************************************** estilo de los botones ********************/
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
/***********************************************************************************/


export default class MenuTab extends Component {

    constructor() {
        super();
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            activeItem: 'Menu Principal',
        }
    }



    handleItemClick = (e, { name }) => this.setState({ activeItem: name });


    render() {

        const { activeItem } = this.state;
        return (
            <div>

                <Menu attached='top' position='right' tabular>

                    <Menu.Item
                        name='Menu Principal'
                        active={activeItem === 'Menu Principal'}
                        href="/"
                    />
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
                    
                </Menu>
                <Central mostrar={activeItem}/>

            </div>

        )
    }
}