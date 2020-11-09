import React from 'react';
import Header from '../components/Header';
import BotonAgregar from '../components/BotonAgregar';
import { Link } from 'react-router-dom';
import '../styles/perfil.css'

const Perfil = () => {
    return ( 
        <>
        
        <Header />
        <BotonAgregar />
        <div className="formPerfil">
            <form>
                <div className="form-group" >
                    <label className="labelPerfil" >Nombres:</label>
                    <input type="text" className="form-control inputPerfil" placeholder="Abraham Alberto" disabled ></input>
                </div>
                <div className="form-group" >
                    <label className="labelPerfil" >Apellidos:</label>
                    <input type="text" className="form-control inputPerfil" placeholder="Narváez Valera" disabled ></input>
                </div>
                <div className="form-group" >
                    <label className="labelPerfil" >Estudios:</label>
                    <input type="text" className="form-control inputPerfil" placeholder="Ingeniería de Sistemas" disabled ></input>
                </div>
                <div className="form-group" >
                    <label className="labelPerfil" >Hobbits:</label>
                    <input type="text" className="form-control inputPerfil" placeholder="Programar, vídeo juegos, jugar fútbol, andar en bicicleta" disabled ></input>
                </div>
                <Link to="/tareas">
                    <button type="submit" className="btn btn-primary botonVerTareas btn-lg" >VER MIS TAREAS</button>
                </Link>
            </form>
        </div>

        </>
     );
}
 
export default Perfil;