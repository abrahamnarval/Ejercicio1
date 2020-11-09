import React from 'react';
import brujaHeader from '../assets/img/bruja.png';
import logoHeader from '../assets/img/nicolas2.png';
import { Link } from 'react-router-dom';
import "../styles/header.css";

const Header = () => {
    return ( 
        <>
        
        <div className="colorFondo" >
            <div className="contenedor" >
                <Link to="/">
                    <img src={logoHeader} alt="" className="logoHeader" />
                </Link>
                
                <h1 className="hewtecHeader" >Hewtec</h1>

                <Link to="/perfil">
                    <img src={brujaHeader} alt="" className="brujaHeader" />
                </Link>
            </div>
        </div>

        </>
     );
}
 
export default Header;