import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import NuevaTarea from './pages/NuevaTarea';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tareas" component={Tareas} />
        <Route path="/nuevaTarea" component={NuevaTarea} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
