import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { getCaracteristiaAulas } from '../util/services/caracteristicasAulas.service'


export default function ComboBox(setCaractAulas) {


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

  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue({e})
  }

  return (
    <div className="App container">
      
      <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      
      onSelect={cartAu}
        >
      onChange={(opt, meta) => setCaractAulas(meta.value)}
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}

