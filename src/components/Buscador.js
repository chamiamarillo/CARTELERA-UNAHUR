import React, {Component} from 'react';

class Buscador extends Component {
    
   busquedaRef = React.createRef();

   obtenerDatos = (e)=>{
          e.preventDefault();
          //tomamos el valor del input
          const termino = this.busquedaRef.current.value;
          //lo enviamos al componente prncipal 
          this.props.datosBusqueda(termino); 
}


 render(){ 
            return(
              <form onSubmit={this.obtenerDatos}>
                   <div>
                      <input ref={this.busquedaRef}
                             type="text" className="form-control form-control-lg" placeholder="filtra"/>
                    </div>

                    <div>
                      <input type="submit" className="btn btn-lg btn-danger btn-block" value="filtrar..."/>
                   </div>

              </form>
            )
     }

}


export default Buscador;