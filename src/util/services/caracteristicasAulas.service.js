// variables globales de conexion a la api

let username = 'aulas';
let password = 'aulas';
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

let url = `http://guarani-test.unahur.edu.ar:80/guarani/3.18/rest/tipos-aulas` // url de la api a consultar

///////////////////////////////////////////////////////////////////////////////////////////////////
// funcion utilizada en el componente de FiltrosComponentes
///////////////////////////////////////////////////////////////////////////////////////////////////

export const getCaracteristiaAulas = () => {

    return fetch(proxyUrl + url, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })

        .then(res => res.json())

}