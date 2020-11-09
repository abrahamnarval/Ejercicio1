import React from 'react';
import '../styles/botonAgregar.css';
import { Link } from 'react-router-dom';

const BotonAgregar = () => {
    return ( 
        <Link to="/nuevaTarea">
                <button type="button" className="btn btn-primary botonIcono">
                    <i class="fas fa-plus-circle iconoAgregar"></i>
                </button>
        </Link>
     );
}
 
export default BotonAgregar;