import React, { Fragment, useState, useEffect } from 'react';
import { getComisiones } from '../util/services/comision.service'
import { grilla } from '../util/services/grilla.service'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/Display.css";
import MaquetaGrilla from './MaquetaGrilla';
import AulasPorEdificio from './AulasPorEdificio';

const Display = ({ mierda }) => {


 console.log (mierda);
  return (
    <div className="Display">
      <BrowserRouter>
        <AnimatedSwitch />
        <nav>



        <div id="classSection2">
          <div id="divPe">
            <p>|  07:00  |</p><p>  08: 00  |</p><p>  09:00  |</p> <p>  10:00  |</p><p> 11:00  |</p><p> 12:00  |</p><p> 13:00  |</p><p> 14:00  |</p><p> 15:00  |</p><p> 16:00  |</p>
            <p> 17:00  |</p><p> 18:00  |</p><p> 19:00  |</p><p> 20:00  |</p><p> 21:00  |</p><p> 22:00  |</p>
          </div>
          <ul className="aulas_grilla2">
            {
                mierda
            //  mierda.map(elemento => (
            //    <ul className="efectoAzul">{elemento.length}</ul>
            //  ))
            }
          </ul>
        </div>




          

          <ul>
            <li>
              <Link to="/">Aula1</Link>
            </li>
            <li>
              <Link to="/first">Laboratorio1</Link>
            </li>
            <li>
              <Link to="/second">Aula Taller</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}



const Home = () => <div className="home">     
                            <MaquetaGrilla />
                    </div>;
const First = () => <div className="first">First Component</div>;
const Second = () => <div className="second">Second Component</div>;

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default Display