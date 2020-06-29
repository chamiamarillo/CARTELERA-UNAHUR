import React, { Component } from 'react';

class FiltroActividad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comision: [
        {
          "comision": 6809,
          "nombre": "AU_30 Arte contemporáneo - B",
          "catedra": null
        },
        {
          "comision": 6808,
          "nombre": "AU_30 Arte contemporáneo - A",
          "catedra": null,
        },
        {
          "comision": 6893,
          "nombre": "AU_32 Educación sexual integral - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_32",
            "nombre": "AU_Educación Sexual Integral. Cuando lo esencial es visible a los ojos"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "JTP",
              "docente": 79,
              "legajo": "94",
              "documento": "DNI 21522360",
              "apellido": "LAVARI",
              "nombres": "MARIANA"
            },
            {
              "responsabilidad": "JTP",
              "docente": 909,
              "legajo": null,
              "documento": "DNI 22810592",
              "apellido": "Amorin",
              "nombres": "Evan"
            }
          ]
        },
        {
          "comision": 6821,
          "nombre": "AU_32 Educación sexual integral - C",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_32",
            "nombre": "AU_Educación Sexual Integral. Cuando lo esencial es visible a los ojos"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 788,
              "legajo": null,
              "documento": "DNI 27120427",
              "apellido": "DI MARZO",
              "nombres": "PAULA GABRIELA"
            }
          ]
        },
        {
          "comision": 6894,
          "nombre": "AU_32 Educación sexual integral - D",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_32",
            "nombre": "AU_Educación Sexual Integral. Cuando lo esencial es visible a los ojos"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "JTP",
              "docente": 79,
              "legajo": "94",
              "documento": "DNI 21522360",
              "apellido": "LAVARI",
              "nombres": "MARIANA"
            },
            {
              "responsabilidad": "JTP",
              "docente": 909,
              "legajo": null,
              "documento": "DNI 22810592",
              "apellido": "Amorin",
              "nombres": "Evan"
            }
          ]
        },
        {
          "comision": 6819,
          "nombre": "AU_32 Educación sexual integral - B",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_32",
            "nombre": "AU_Educación Sexual Integral. Cuando lo esencial es visible a los ojos"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "JTP",
              "docente": 22,
              "legajo": "36",
              "documento": "DNI 28231971",
              "apellido": "FORMENTINI",
              "nombres": "ANDREA ROMINA"
            }
          ]
        },
        {
          "comision": 6818,
          "nombre": "AU_33 Género y sociedad - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_33",
            "nombre": "AU_Género y Sociedad: una nueva mirada para una era mas justa"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "JTP",
              "docente": 16,
              "legajo": "28",
              "documento": "DNI 31344840",
              "apellido": "Canovas Herrera",
              "nombres": "Gisela"
            },
            {
              "responsabilidad": "Adjunto",
              "docente": 9,
              "legajo": "11",
              "documento": "DNI 16130204",
              "apellido": "TORRE",
              "nombres": "CLAUDIA INES"
            }
          ]
        },
        {
          "comision": 6813,
          "nombre": "AU_34 Introducción a la imagen - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_34",
            "nombre": "AU_Introducción a la Imagen. (De la imagen fija a la imagen en movimiento)"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 773,
              "legajo": null,
              "documento": "DNI 16962470",
              "apellido": "TORRES",
              "nombres": "ALEJANDRA"
            }
          ]
        },
        {
          "comision": 6814,
          "nombre": "AU_34 Introducción a la imagen - B",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_34",
            "nombre": "AU_Introducción a la Imagen. (De la imagen fija a la imagen en movimiento)"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 773,
              "legajo": null,
              "documento": "DNI 16962470",
              "apellido": "TORRES",
              "nombres": "ALEJANDRA"
            }
          ]
        },
        {
          "comision": 6806,
          "nombre": "AU_27 Literatura y memoria - B",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_27",
            "nombre": "AU_Literatura y Memoria"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 571,
              "legajo": null,
              "documento": "DNI 22215402",
              "apellido": "ROBLES",
              "nombres": "RAQUEL"
            }
          ]
        },
        {
          "comision": 6805,
          "nombre": "AU_27 Literatura y memoria - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_27",
            "nombre": "AU_Literatura y Memoria"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 571,
              "legajo": null,
              "documento": "DNI 22215402",
              "apellido": "ROBLES",
              "nombres": "RAQUEL"
            }
          ]
        },
        {
          "comision": 6619,
          "nombre": "AU_26 Manipulación genética en humanos - B",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_26",
            "nombre": "AU_Manipulacion genetica en humanos. Historia, mitos y realidades"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 428,
              "legajo": null,
              "documento": "DNI 10832460",
              "apellido": "PALMA",
              "nombres": "HECTOR"
            }
          ]
        },
        {
          "comision": 6920,
          "nombre": "AU_26 Manipulación genética en humanos - A",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_26",
            "nombre": "AU_Manipulacion genetica en humanos. Historia, mitos y realidades"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 428,
              "legajo": null,
              "documento": "DNI 10832460",
              "apellido": "PALMA",
              "nombres": "HECTOR"
            }
          ]
        },
        {
          "comision": 6817,
          "nombre": "AU_36 Pensamiento Ambiental Latinoamericano - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_36",
            "nombre": "AU_Pensamiento Ambiental Latinoamericano"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 826,
              "legajo": null,
              "documento": "DNI 20751695",
              "apellido": "CORBETTA",
              "nombres": "SILVINA"
            }
          ]
        },
        {
          "comision": 6950,
          "nombre": "AU_37 Pensamiento pedagógico latinoamericano A Distancia",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_37",
            "nombre": "AU_Pensamiento Pedagógico Latinoamericano"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 335,
              "legajo": "455",
              "documento": "DNI 12079213",
              "apellido": "VAZQUEZ GAMBOA",
              "nombres": "ANA MARIA"
            }
          ]
        },
        {
          "comision": 6810,
          "nombre": "AU_31 Una historia del rock nacional - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_31",
            "nombre": "AU_Una Historia del Rock Nacional"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 746,
              "legajo": null,
              "documento": "DNI 14822195",
              "apellido": "Edwards",
              "nombres": "Rodolfo"
            }
          ]
        },
        {
          "comision": 6811,
          "nombre": "AU_31 Una historia del rock nacional - B",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_31",
            "nombre": "AU_Una Historia del Rock Nacional"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 746,
              "legajo": null,
              "documento": "DNI 14822195",
              "apellido": "Edwards",
              "nombres": "Rodolfo"
            }
          ]
        },
        {
          "comision": 6630,
          "nombre": "AU_2 Abordaje cristiano de situaciones sociales complejas - B",
          "catedra": null,
          "modalidades": [
            "Presencial",
            "A distancia"
          ],
          "instancias": [
            "Regularidad",
            "Promoción"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_2",
            "nombre": "Abordaje de situaciones sociales complejas"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 391,
              "legajo": null,
              "documento": "DNI 20442587",
              "apellido": "Peluso",
              "nombres": "María Silvina"
            }
          ]
        },
        {
          "comision": 6629,
          "nombre": "AU_2 Abordaje cristiano de situaciones sociales complejas - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "AU_2",
            "nombre": "Abordaje de situaciones sociales complejas"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": [
            {
              "responsabilidad": "Adjunto",
              "docente": 391,
              "legajo": null,
              "documento": "DNI 20442587",
              "apellido": "Peluso",
              "nombres": "María Silvina"
            }
          ]
        },
        {
          "comision": 6736,
          "nombre": "375-Agentes-Físicos I - A",
          "catedra": null,
          "modalidades": [
            "A distancia",
            "Presencial"
          ],
          "instancias": [
            "Promoción",
            "Regularidad"
          ],
          "turno": {
            "turno": null,
            "nombre": null
          },
          "ubicacion": {
            "ubicacion": 1,
            "nombre": "UNAHUR"
          },
          "actividad": {
            "codigo": "375",
            "nombre": "Agentes físicos I"
          },
          "periodo_lectivo": {
            "periodo_lectivo": 29,
            "nombre": "PRIMER CUATRIMESTRE 2020"
          },
          "horarios": [],
          "docentes": []
        }
      ]
    }
  }

  componentWillMount() {
    fetch('./component/Comisiones.json')
      .then((response) => response.json())
      .then((com) => {
        this.setState({ comision: com })
      })    
  }


  render() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
          <th>Codigo</th>
            <th>Nombre</th>
            <th>Catedra</th>
          </tr>
        </thead>
        <tbody>  
          {this.state.comision.map(com => {
            return (
                
              <tr key={com.comision}>
                  <td>{com.comision}</td>
                <td>{com.nombre}</td>
                <td>{com.catedra}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
   
}

export default FiltroActividad;