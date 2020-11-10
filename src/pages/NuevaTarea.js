import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/nuevaTarea.css'
import { nanoid } from 'nanoid'

const NuevaTarea = ({ history }) => {

    const [error, setError] = useState(false);
    const [tarea, setTarea] = useState({
        id: nanoid(),
        titulo: '',
        descripcion: ''
    })
    const {id, titulo, descripcion} = tarea

    const handleChange = event => {
        setTarea({
            ...tarea,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if( titulo.trim() === '' || descripcion.trim() === '' ){
            setError(true);
            return;
        }
        
        // Traer la informacion de localStorage
        let getDatos = JSON.parse(localStorage.getItem("tareas"))

        // guardar la nueva Tarea en Vector Local y en LocalStorage
        getDatos.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(getDatos));

        // enviar a la vista Tarea
        history.push("/tareas");
    }
    
    return ( 
        <>
        
        <Header />
        <div className="formNuevaTarea">
            {
                error
                ?
                <div className="alert alert-danger error" role="alert">
                    Por favor llene los campos
                </div>
                :
                null
            }
            
            <form onSubmit={handleSubmit} >
                <div className="form-group" >
                    <label className="labelNuevaTarea" >Nombre Tarea:</label>
                    <input type="text" className="form-control inputNuevaTarea" name="titulo" onChange={handleChange}></input>
                </div>
                <div className="form-group" >
                    <label className="labelNuevaTarea" >Descripción de tarea:</label>
                    <input type="text" className="form-control inputNuevaTarea" name="descripcion" onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary botonGuardarTareas btn-lg" >GUARDAR TAREA</button>
            </form>
        </div>
        
        </>
     );
}
 
export default NuevaTarea;