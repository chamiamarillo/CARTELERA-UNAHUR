import React, { Fragment } from 'react';

import logologin from "./login.png"

const Loguin = () => {
    return ( 
        <Fragment >
            <div className="anchoLoguin">
                <input
                    type="submit"
                    className="inpLoguin"
                    value="Academica"
                />
            </div>
            <div className="logoLoguin">
                <p>
                    <img 
                        className="img-fluid"
                        src={logologin}
                        alt="imagen_logologin"
                    />
                </p>
            </div>
        </Fragment>
     );
}
 
export default Loguin;




