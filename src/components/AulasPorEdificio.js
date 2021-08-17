import React from 'react';

const AulasPorEdificio = ({ jsonAulasXEdif }) => {

    const auXEdif = jsonAulasXEdif.map(data => (
        {
            espacio: data.espacio,
            aula: data.nombre,
            capacidad: data.capacidad,
            edificio: data.edificio.edificacion
        }
    ))

    return (
        <>
            {
                auXEdif.map(elemento => (
                    <li className="btn-mostrarAula">{elemento.aula}</li>
                ))
            }
        </>
    );
}

export default AulasPorEdificio;