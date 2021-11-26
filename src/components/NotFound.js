import React from 'react';
import imagenFondo from '../assets/images/404.png';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;