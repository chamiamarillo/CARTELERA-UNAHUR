import React, {Component, useState} from 'react';
import { Dropdown } from 'semantic-ui-react'

const Propuestas = () => {

    var value
    const [elegidos, setElegidos] = useState([])
    
    const options = [
        { key: 1, text: 'One', value: 1 },
        { key: 2, text: 'Two', value: 2 },
        { key: 3, text: 'Three', value: 3 },
    ]
      
    const renderLabel = (label) => ({
    
        color: 'blue',
        content: `Customized label - ${label.text}`,
        icon: 'check',
    })

    const guardarSeleccion = (valor) => {
        setElegidos([
            ...elegidos,
            valor
        ])
    }
 
    console.log(elegidos)


    return ( 
        <Dropdown
            multiple
            selection
            fluid
            options={options}
            placeholder='Choose an option'
            renderLabel={renderLabel}
            getValue={(e) => {guardarSeleccion(e.placeholder)}}
            
        />
    );
}
 
export default Propuestas;