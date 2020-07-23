const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT": {
        return {
          ...state,
        };
      }
      case "FETCH_SUCCESS": {
        return {
          ...state,
          cargando: false,
          CargandoMas: false,
          comision_nombre: [...state.comision_nombre, ...action.payload],
        };
      }
      case "FETCH_MORE": {
        return {
          ...state,
          CargandoMas: true,
          comision_pagina: state.comision_pagina + 1,
        };
      }
      case "FETCH_ERROR": {
        return {
          ...state,
          cargando: false,
          CargandoMas: false,
          error: true,
        };
      }
      default:
        return state;
    }
  };