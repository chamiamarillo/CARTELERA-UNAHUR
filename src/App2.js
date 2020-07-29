import React, {Component} from 'react';
import Buscador from './Buscador';
import Buscador from './Resultado';
import Elemento from './Elemento';

class App2 extends Component {
   state={
    termino:'',
    elementos:[],
    pagina: ''
    
}

scroll = () =>{
      const elemento = document.querySelector('.jumbotron');
      elemento.scrollIntoView('smooth', 'start');
}

paginaAnterior = () =>{
  //leer el state de la pagina actual
  let pagina =this.state.pagina;
//leer si la pagina es 1, ya no ir hacia atras
  if(pagina===1) return null;

//restar uno a la pagina actual
  pagina -=1;

//agregar el cambio al state
  this.setState({
   pagina
}, ()=>{
   this.consultarApi();
   this.scroll();
});

}
paginaSiguiente= () =>{
 //leer el state de la pagina actual
  let popagina =this.state.pagina;
//sumar uno a la pagina actual
  pagina +=1;
//agregar el cambio al state
  this.setState({
   pagina}, ()=>{
   this.consultarApi();
   this.scroll();
});

}

consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url =` http://localhost:80/guarani/3.17/rest/comisiones-aulasq=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url, )
       .then(respuesta=> respuesta.json())
       .then(resultado => this.setState({elementos: resultado.hits}))
}

 datosBusqueda = (termino)=> {
   this.setState({
        termino: termino,
        pagina: 1
    }, ()=> {
       this.consultarApi();
     })
}

  render(){
     return (
     <div className="app container">
         <p classsName="lead text-center">Filtrar por  </p>
         <Buscador
             datosBusqueda={this.datosBusqueda}/>

         <div className="row justify-content-center">
             
         <Resultado 
              imagenes={this.state.elementos}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}

                 />
             <div/>
          </div>
     </div>
     );
  }
}
export default App;
//esto debe estar conectado al index js
