import React from 'react';
import '../styles/tarea.css';

const Tarea = ({ titulo, descripcion, id, handleDelete }) => {
    return ( 
        <>
         <div className="contenedorTarea">
            <div className="equis" id={id} onClick={handleDelete} title="Eliminar">
               <i className="fas fa-times" id={id} onClick={handleDelete}></i>
            </div>
            <div className="contenedor-tarea">
               <h2 className="negrita">{titulo}</h2>
               <h5 className="negrita">{descripcion}</h5>
            </div>
         </div>
      </>
     );
}
 
export default Tarea;