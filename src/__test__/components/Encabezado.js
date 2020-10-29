import React from 'react';
import { shallow } from 'enzyme';
import {Encabezado } from '../../components/Encabezado';


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



it('render no products when store empty', () =>{
    const wrapper = shallow(<Encabezado encabezado={[]}/>);
    expect(wrapper.find(".product").length).toBe(0);
})