import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { getPropuestas } from '../util/services/propuesta.service'

//import { carreras } from '../util/services/propuestaArmada.service'

// solucion encontrada en https://www.digitalocean.com/community/tutorials/react-react-select
/*
const countryOptions = [
  { value: 'af1',  text: 'Afghanistan' },
  { value: 'ax1',  text: 'Aland Islands' },
  { value: 'al1',  text: 'Albania' },
  { value: 'dz1',  text: 'Algeria' },
  { value: 'as1',  text: 'American Samoa' },
  { value: 'ad1',  text: 'Andorra' },
  { value: 'ao1',  text: 'Angola' },
  { value: 'ai1',  text: 'Anguilla' },
  { value: 'ag1',  text: 'Antigua' },
  { value: 'ar1',  text: 'Argentina' },
  { value: 'am1',  text: 'Armenia' },
  { value: 'aw1',  text: 'Aruba' },
  { value: 'au1',  text: 'Australia' },
  { value: 'at1',  text: 'Austria' },
  { value: 'az1',  text: 'Azerbaijan' },
  { value: 'bs1',  text: 'Bahamas' },
  { value: 'bh1',  text: 'Bahrain' },
  { value: 'bd1',  text: 'Bangladesh' },
  { value: 'bb1',  text: 'Barbados' },
  { value: 'by1',  text: 'Belarus' },
  { value: 'be1',  text: 'Belgium' },
  { value: 'bz1',  text: 'Belize' },
  { value: 'bj1',  text: 'Benin' },
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

