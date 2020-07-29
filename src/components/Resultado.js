import React ,{Component} from 'react';
import Elemento from './Elemento';
import Paginacion from './Paginacion';

class Resultado extends Component {
    
      mostrarElementos = () =>{

        const elementos= this.props.elementos;

        if (elementos.length === 0) return null;

     return( 
         <React.Fragment>
       
          <div>
             {elementos.map(elemento=>(
                <Elemento
                  key ={elemento.id}
                  elemento={elemento}
                 />    
              )
              )}
            </div>
            <Paginacion
               paginaAnterior={this.props.paginaAnterior}
               paginaSiguiente={this.props.paginaSiguiente}
             />
          </React.Fragment>
     )
}

    


render(){
       return( 
         <React.Fragment>
       
          {this.mostrarElementos()}
          </React.Fragment>

      );
   }
}
 
export default Resultado;