import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Tarea from '../components/Tarea';
import BotonAgregar from '../components/BotonAgregar';

const Tareas = () => {

    const [tareas, setTarea] = useState([]);

    useEffect(() =>{
        consultaBD()
    },[])

    const consultaBD = () => {
        const peticion = JSON.parse(localStorage.getItem("tareas"));
        if(peticion){
            setTarea(peticion);
        }else{
            localStorage.setItem("tareas", "[]");
        }
    }
    // (tarea.titulo !== event.target.titulo)
    // [1,2,3,4,5] !== 4
    //  [1,2,3,5]
    const handleDelete = event => {
        let filtrado = tareas.filter(tarea => (tarea.id !== event.target.id))
        // Guardar en LocalStorage
        localStorage.setItem("tareas", JSON.stringify(filtrado));
        // Guardar en el State
        setTarea(filtrado)
    }
    
    return ( 
        <>
        <Header />
        <BotonAgregar />
        <div className="text-center" >
            {
                tareas.length > 0 
                ?
                tareas.map(tarea => (
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        titulo={tarea.titulo}
                        descripcion={tarea.descripcion}
                        handleDelete={handleDelete}
                    />
                ))
                :
                <h1>No hay tareas que mostrar en el momento</h1>
            }
            
        </div>

        </>
     );
}
 
export default Tareas;