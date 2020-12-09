import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getPropuestas } from '../util/services/propuesta.service'

//import { carreras } from '../util/services/propuestaArmada.service'

// solucion encontrada en https://www.digitalocean.com/community/tutorials/react-react-select
/*
const countryOptions = [
  { value: 'af1',  text: 'Afghanistan' },
  { value: 'ax1',  text: 'Aland Islands' },
]
*/

const Propuesta = ({setEsPropuesta}) => {
  
  const [jsonPropuestas, setJsonPropuestas] = useState([])
  
  useEffect(() => {
    getPropuestas().then(rest => setJsonPropuestas(rest));
  }, [])

  const prp = jsonPropuestas.map(dato => (
    {
      value: dato.propuesta,
      text: dato.nombre
    }
  ))
    
 return( 

  
  <Dropdown 
    id='propuestaLista'
    placeholder='Buscar por propuesta'
    //fluid
    search
    multiple
    selection
    options={prp}
    onChange={(opt, meta) => setEsPropuesta(meta.value)}
    
  />
  
 );
}

export default Propuesta

