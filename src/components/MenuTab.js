import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
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
                        id='MenuPrincipalLabel'
                        active={activeItem === 'Menu Principal'}
                        href="/"
                    />
                    <br /><br />
                    <Menu.Item
                        name='Asignacion'
                        active={activeItem === 'Asignacion'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Modificacion'
                        active={activeItem === 'Modificacion'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Consulta'
                        active={activeItem === 'Consulta'}
                        onClick={this.handleItemClick}

                    />
                    <Menu.Item
                        name='Reportes'
                        active={activeItem === 'Reportes'}
                        onClick={this.handleItemClick}

                    />
                    <Menu.Item
                        name='Salir'
                        active={activeItem === 'Salir'}
                        onClick={this.handleItemClick}

                    />
                </Menu>
                <Central mostrar={activeItem}/>
            </div>
        )
    }
}