import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/nuevaTarea.css'

const NuevaTarea = () => {
    return ( 
        <>
        
        <Header />
        <div className="formNuevaTarea">
            <form>
                <div className="form-group" >
                    <label className="labelNuevaTarea" >Nombre Tarea:</label>
                    <input type="text" className="form-control inputNuevaTarea" ></input>
                </div>
                <div className="form-group" >
                    <label className="labelNuevaTarea" >Descripción de tarea:</label>
                    <input type="text" className="form-control inputNuevaTarea" ></input>
                </div>
                <Link to="/tareas">
                    <button type="submit" className="btn btn-primary botonGuardarTareas btn-lg" >GUARDAR TAREA</button>
                </Link>
            </form>
        </div>
        
        </>
     );
}
 
export default NuevaTarea;