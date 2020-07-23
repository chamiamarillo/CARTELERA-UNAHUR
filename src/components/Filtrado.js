  import { ReactComponent } from "*.svg";

  const debugLog = texto => console.log(azul(`[Filtrado] ${texto}`));

  class Filtrado extends React.Component {
    constructor(key) {
      this.key = key;
      this.comision= comision;
    }

    obtenerComision(comisionBuscada) {
      debugLog(`Buscando información ...${comisionBuscada}...`)
        .get('http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?limit=20' )
      
        .query({ key: this.key, results: comisionBuscada})
        .then(res => {
          const comiss = res.body.results[0];
          if (comiss.comision!== 'comision') {
            return Promise.reject(new Error('No se encontró la comision que buscas'));
          }

          return comiss;
        });
    }
  
  }
  
  export default Filtrado;