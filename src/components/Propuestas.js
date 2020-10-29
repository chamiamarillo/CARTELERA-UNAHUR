import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getPropuestas } from '../util/services/propuesta.service'


const Propuesta = ({setMierda}) => {
  
  //const [mierda, setMierda] = useState({})
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
    id='mierdaLista'
    placeholder='Buscar por propuesta'
    search
    multiple
    selection
    options={prp}
    onChange={(opt, meta) => setMierda(meta.value)}
    
  />
 );
}

export default Propuesta

