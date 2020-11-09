import React from 'react';
import brujaHome from '../assets/img/bruja.png';
import logoHome from '../assets/img/nicolas2.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "../styles/home.css";

const Home = () => {
    return ( 
        <>

        <Header />
        <div className="fondoHome">
            <div className="container" >
                <div className="row" >
                    <div className="separacionTexto" >
                        <img src={logoHome} alt="" className="logoHome" />
                        <h3 className="hewtecHome" >Hewtec</h3>
                        <h1 className="welcome" >Bienvenidos</h1>
                        <h2 className="name" >Soy Abraham</h2>
                        <Link to="/tareas">
                            <button type="button" className="btn btn-primary botonHome btn-lg" >START</button>
                        </Link>
                    </div>
                    <div className="text-center separacionBruja divBruja" >
                        <img src={brujaHome} alt="" className="brujaHome" />
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Home;