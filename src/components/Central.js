import React, { Component, useState } from "react";
import Asignar from "./Asignar";
import CrearEstudiantes from "./CrearEstudiantes";
import { NavLink, withRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import { BrowserRouter, Switch } from 'react-router-dom';
import MenuTab, {enviar} from "./MenuTab";


class Central extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemActiveMenuTab: ''
     }
    };


  render() {

    return (
      this.state.itemActiveMenuTab === 'Asignar'
       
          ? <Asignar/>
          : <p>NO FUNCIONA</p>
      

        

    );
  }
}

export default Central;