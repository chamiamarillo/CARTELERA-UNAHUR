import React from 'react';
import MenuTab from './MenuTab';
import FechaHora from './FechaHora';
import './css/MenuNav.css';

const MenuNav = () => {
    return ( 
        <div className="anchotab">
            <div className="menubotones">
                <MenuTab />
            </div>

            <div className="menuhora">
                <button className="btn btn-default" type="submit">{<FechaHora />}</button>
            </div>
        </div>        
     );
}
 
export default MenuNav;