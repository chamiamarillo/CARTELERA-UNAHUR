import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import {getEdificios} from '../util/services/edificios.service'


const Edificios = () => {

  const [jsonEdificios, setJsonEdificos] = useState([]);
  const [edifSelect, setEdifSelect] = useState(null);


  useEffect(() => {
    getEdificios().then(rest => setJsonEdificos(rest));
  }, []);


  const sede = jsonEdificios.map(data => (
    {
      text: data.edificacion_nombre,
      value: data.edificacion,
    }
  ))


  console.log(sede)

  return (
  <Dropdown
    placeholder='Seleccionar Edificio'
    //fluid
    search
    selection
    options={sede}
    onChange={(opt, meta) => setEdifSelect(meta.value)}
  />
  );
}

export default Edificios
