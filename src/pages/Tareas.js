import React from 'react';
import Header from '../components/Header';
import BotonAgregar from '../components/BotonAgregar';

const Tareas = () => {
    return ( 
        <>
        
        <Header />
        <BotonAgregar />
        <div className="text-center">
            <h1>No hay tareas que mostrar en el momento</h1>
        </div>

        </>
     );
}
 
export default Tareas;