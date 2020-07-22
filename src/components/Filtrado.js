  import { ReactComponent } from "*.svg";

  const debugLog = texto => console.log(azul(`[Filtrado] ${texto}`));

  class Filtrado extends React.Component {
    constructor(key) {
      this.key = key;
      this.comision= comision;
    }

    obtenerComision(comisionBuscada) {
      debugLog(`Buscando información ...${comisionBuscada}...`)
        .get('http://guarani-test.unahur.edu.ar/guarani3/swagger/index.html?url=http://guarani-test.unahur.edu.ar/guarani/3.17/rest/api-docs#!/comisiones-aulas/get')
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