import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portafolio';
import './App.css';

/**
 * Componente principal que maneja las rutas de la aplicación.
 * @returns {JSX.Element} La estructura JSX que se renderiza en la aplicación.
 */
const App = () => {
    return (
        <Router>
            <div className="App">
                {/* Define las rutas y los componentes correspondientes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portafolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
