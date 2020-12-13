import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getPropuestas } from '../util/services/propuesta.service'


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
    id="efectoPropuesta"
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

