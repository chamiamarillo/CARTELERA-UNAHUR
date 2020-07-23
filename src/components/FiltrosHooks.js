const { Fragment } = require("react");
const axios = require('axios');

function comision_nombre() {
    const numero_por_pagina= 4;
  
    const [cargando, setcargando] = React.useState(true);
    const [CargandoMas, setCargandoMas] = React.useState(false);
    const [error, seterror] = React.useState(false);
    const [recuperado, setRecuperado] = React.useState(false);
    const [comision_pagina, setComision_pagina] = React.useState(1);
    const [comision_nombre, setcomision_nombre] = React.useState([]);
  
    const placeholderArr = Array.from({ length: numero_por_pagina}, (v, i) => i);
  
    React.useEffect(() => {
      let cancelar = false;
      let res = {};
  
      async function getComision_nombre() {
        try {
          if (!recuperado) {
            res = await axios.get(
              `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20${comision_nombre}&page=${comision_pagina}&per_page=${numero_por_pagina}`
            );
            setRecuperado(true);
          }
  
          if (!cancelar) {
            setcomision_nombre([...comision_nombre, ...res.data]);
  
            if (cargando) setcargando(false);
            if (CargandoMas) setCargandoMas(false);
          }
        } catch (error) {
          console.warn(error);
          if (!cancelar) {
            if (cargando) setcargando(false);
            if (CargandoMas) setCargandoMas(false);
            setRecuperado(true);
            seterror(true);
          }
        }
      }
  
      if (!recuperado && !cancelar) {
        getComision_nombre();
      }
  
      return () => {
        cancelar = true;
      };
    }, [
      comision_nombre,
      recuperado,
      comision_pagina,
      cargando,
      error,
      CargandoMas,
    ]);
  
    function cargarMasInformacion() {
      setComision_pagina(comision_pagina + 1);
      setRecuperado(false);
      setCargandoMas(true);
    }
 
    
  }
    return (
      <Fragment>
          
          {error && <ErrorMessage>Algo salido mal...</ErrorMessage>}
    
          {cargando &&
            placeholderArr.map((i) => <Fragment key={i} />)}
          {!cargando &&
            comision_nombre.map((comision) => <Fragment key={comision.id} comision={comision} />)}
    
          {CargandoMas &&
            placeholderArr.map((i) => <Fragment key={i} />)}
          <LoadMore onClick={cargarMasInformacion}>
            {!CargandoMas && <LoadMoreLabel>Cargar más...</LoadMoreLabel>}
            {CargandoMas && <Spinner />}
          </LoadMore>
        
      </Fragment>
    );
  