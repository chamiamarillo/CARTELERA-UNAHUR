import React from 'react';

const Elemento = (props)=> {
      //esto lo va a buscar al json y me trae los valores
     const {previewURL, comision, nombre , modalidad}= props.elemento;

      return (
       
          <div className="card" >
        
            <img src={previewURL} alt={nombre} className="card-img-top"/>

              <p className="card-text" > {comision} comision </p>
              <p className="card-text" > {modalidad} modalidad </p>
           
        //aca tengo que poner la ruta absoluta con la que probe se rompe()
         <a href={
             previewURL} target="_blank" className="btn btn-primary btn-block"> Ver Elemento </a>
         </div >
        
     )
}

export default Elemento;