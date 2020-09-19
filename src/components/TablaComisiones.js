import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/TablaComisiones.css'


const TablaComisiones = ({ jsonGrillaFiltrado }) => {


  //const [jsonTabla, setJsonTabla] = useState({jsonGrillaFiltrado})

  /*
  const [checkbox, setCheckbox1] = useState(''); 

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

*/
  /*
    useEffect(() => {
    
     // console.log("FUNCION GRILLA....")
     // console.log(grilla(jsonGrillaFiltrado))
     setRender(mierda)
     // setCheckbox1('')
    }, [mierda])
    
  */
    


  return (
    <>
      {
        jsonGrillaFiltrado &&

        <MDBDataTableV5
          hover
          searchLabel='Buscar'
          entriesLabel='Cant. Registros'
          //infoLabel
          entriesOptions={[5, 10,15,20, 25,30]}
          entries={5}
          pagesAmount={4}
          data={jsonGrillaFiltrado}
          //checkbox
          //headCheckboxID='id2'
          //bodyCheckboxID='checkboxes2'
          striped
          bordered
          materialInputs
          responsive
          focus
          //selectRow="selectHandler"
        />
      }
    </>
  );



}

export default TablaComisiones

