import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { getComisiones } from './util/services/comision.service';
import { get } from 'jquery';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from "react-router-dom";
import Encabezado from './components/Encabezado'
configure({adapter: new Adapter()});

describe('<App/>', () => {
    test('render', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(App)).toBeDefined();
    });
});

it('renders without crashing', () => {
  shallow(<App/>);
});

/*describe('<Encabezado/>', () => {
  test('render', () => {
      const wrapper = shallow(<Encabezado/>);
      expect(wrapper.find(Encabezado)).toBeDefined();
  });
});*/

it('renders without crashing', () => {
  shallow(<Encabezado/>);
});


/*
let username = 'aulas';
let password = 'aulas';
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
Authorization: Basic YXVsYXM6YXVsYXM=lo que trae el login=

let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?con_horarios=1&con_docentes=1&limit=1000`
export const getComisiones = () => {

    return fetch(proxyUrl + url, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })
       .then(res => res.json())

}*/
it('renders without crashing', () => {
  shallow(<getComisiones/>);
});

test('Link cambios en la funcion getComisiones', () => {
  const component = renderer.create(
    <Link page="http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?con_horarios=1&con_docentes=1&limit=1000">Guarani</Link>,
  );
  let traemeAlgo = component.toJSON();
  expect(traemeAlgo)})


/*
describe('comision.service.js', () => {
  test('getComisiones', () => {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = `http://181.45.234.123:8095/guarani/3.17/rest/comisiones-aulas?con_horarios=1&con_docentes=1&limit=1000`
   expect(getComisiones(proxy, url)).toEqual(get);
  })
 })
 


/* Shallow rendering, es util para probar un componente de forma aislada sin renderizar los sub-componentes que contenga,
No ejecuta los metodos de ciclo de vida del componente.

it('renders ProductList',()=>{
  const wrapper= shallow(<App/>;
    expect(wrapper.find(ProductList).length).toBe()1;
  });*/

  /*Static rendering api---es útil para renderizar componentes de react a html estaticos y analizar estructuras html
  
  it('renders product list',()=>{
    const wrapper= render(<App/>);
    expect(wrapper.find('ul.products').length).toBe(1);)
  }
  });*/ 

  /*Full rendering api--- ideal para renderizar sub-componentes, probar la interacción con api's del dom o requerir ciclo de vida completo(ejemplo componentDidMount)
  it('navigates to page 2', ()=>{
    const wrapper= mount(routes);
    click(wrapper.find(a'[href=#/page2]').get(0));
    expect(wrapper.find('h1').text()).toBe('Pagina 2');
  });*/

/* Shallow rendering, es util para probar un componente de forma aislada sin renderizar los sub-componentes que contenga,
No ejecuta los metodos de ciclo de vida del componente.

it('renders ProductList',()=>{
  const wrapper= shallow(<App/>;
    expect(wrapper.find(ProductList).length).toBe()1;
  });*/

  /*Static rendering api---es útil para renderizar componentes de react a html estaticos y analizar estructuras html
  
  it('renders product list',()=>{
    const wrapper= render(<App/>);
    expect(wrapper.find('ul.products').length).toBe(1);)
  }
  });*/ 

  /*Full rendering api--- ideal para renderizar sub-componentes, probar la interacción con api's del dom o requerir ciclo de vida completo(ejemplo componentDidMount)
  it('navigates to page 2', ()=>{
    const wrapper= mount(routes);
    click(wrapper.find(a'[href=#/page2]').get(0));
    expect(wrapper.find('h1').text()).toBe('Pagina 2');
  });*/ 


it('renders without crashing', () => {
  shallow(<App />);
});