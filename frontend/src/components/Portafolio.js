import React from 'react';

/**
 * Componente funcional que representa la página de portafolio de servicios.
 * @returns {JSX.Element} La estructura JSX que se renderiza en la página.
 */
const Portafolio = () => {
    return (
        <div className="portafolio">
            {/* Título de la página */}
            <h1>Our Portfolio of Services</h1>
            {/* Descripción general */}
            <p>Explore the wide range of services we offer to our clients.</p>
            {/* Lista de servicios */}
            <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Solutions</li>
                <li>IT Consulting</li>
            </ul>
        </div>
    );
};

export default Portafolio;
