const axios = require('axios');
import {useEffect} from 'react';
import { useReducer } from 'react';

export default function useComisionReducer() {
    const estadoInicial = {
      comision_pagina: 1,
      numero_por_pagina: 4,
      comision_nombre: [],
      cargando: true,
      CargandoMas: false,
      error: false,
    };
  
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);
  
   React.useEffect(() => {
      let res = {};
      let source = axios.CancelToken.source();
      dispatch({ type: "FETCH_INIT" });
  
      const fetchData = async () => {
        try {
          res = await axios.get(
            `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20${comision_nombre}&page=${state.comision_pagina}&per_page=${state.numero_por_pagina}`,
            {
              cancelToken: source.token,          }
          );
  
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        } catch (error) {
          if (axios.isCancel(error)) {         
             console.warn("Cancelled axios request");
          } else {
            console.warn(error);
            dispatch({ type: "FETCH_ERROR" });
          }
        }
      };
  
      fetchData();
  
      return () => {
        // Evita la pérdida de memoria al pasar a otra página y cancela la solicitud de axios
        source.cancel();    };
    }, [state.comision_pagina, state.numero_por_pagina]);
  
    function cargarMasInformacion() {
      //Carga publicaciones con paginación, numero_por_pagina en cada página
      dispatch({ type: "FETCH_MORE" });
    }
  
    return { ...state, cargarMasInformacion };
  }