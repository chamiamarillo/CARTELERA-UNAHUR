import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getCaracteristiaAulas } from '../util/services/caracteristicasAulas.service'


const CaracteristicasDeAulas = ({setCaractAulas}) => {

  const [jsonCaracAulas, setJsonCaracAulas] = useState([])

  useEffect(() => {
    getCaracteristiaAulas().then(rest => setJsonCaracAulas(rest));
  }, [])

  const cartAu = jsonCaracAulas.map(dato => (
    {
      value: dato.ampliacion_tipo,
      text: dato.nombre
    }
  ))
  

 return( 
  <Dropdown 
    id='CaracteristicaAulaLista'
    placeholder='Caracteristicas de las aulas'
    fluid
    search
    multiple
    selection
    options={cartAu}
    onChange={(opt, meta) => setCaractAulas(meta.value)}
    
  />
 );
}
 
export default CaracteristicasDeAulas;