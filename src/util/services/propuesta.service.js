// variables globales de conexion a la api

let username = 'aulas';
let password = 'aulas';
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

let url = `http://181.45.234.123:8095/guarani/3.17/rest/propuestas-formativas`

///////////////////////////////////////////////////////////////////////////////////////////////////
// funcion utilizada en el componente de FiltrosComponentes
///////////////////////////////////////////////////////////////////////////////////////////////////

export const getPropuestas = () => {

    return fetch(proxyUrl + url, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })

        .then(res => res.json())

}