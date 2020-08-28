import React, { useState } from 'react';
import FiltrosComponente from './FiltrosComponente';

const FetchJson = () => {
    

    const [jsonGrilla, guardarJsonGrilla ] = useState([]);
    

        let username = 'aulas';
        let password = 'aulas';
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        
        let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?con_horarios=1&con_docentes=1&limit=1000`
    
        fetch(proxyUrl + url, {
          method: 'GET',
          headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
        })
        
        .then(res => res.json())
          .then(
            (result) => {
              guardarJsonGrilla(result)
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    return (
        <FiltrosComponente
           result={jsonGrilla}
        />
    )

}



export default FetchJson;