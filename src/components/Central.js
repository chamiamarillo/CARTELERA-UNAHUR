import React, { Component, useState } from "react";
import Asignar from "./Asignar";


class Central extends Component {
  render() {
 const estadoCEntral =  'Asignar'
  return (
        estadoCEntral === 'Asignar'
        ? <Asignar/>
       : <p>NO FUNCIONA</p>

       

    )
   
  }
}

 
  

export default Central;