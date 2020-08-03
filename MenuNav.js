import React from 'react';
import MenuTab from './MenuTab';
import FechaHora from './FechaHora';

const MenuNav = () => {
    return ( 
        <div className="anchotab">
            <div className="menubotones">
                <MenuTab />
            </div>

            <div className="menuhora">
                <button class="btn btn-default" type="submit">{<FechaHora />}</button>
            </div>
        </div>        
     );
}
 
export default MenuNav;