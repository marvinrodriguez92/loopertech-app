import React, { useEffect, useState } from 'react';
import apiClient from '../services/axiosConfig'; // Importamos la instancia de Axios configurada

// Componente Home
const Home = () => {
  // Estados para almacenar los datos, el estado de carga y los errores
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hook useEffect para ejecutar la lógica al montar el componente
  useEffect(() => {
    // Función asíncrona para obtener los datos del backend
    const fetchData = async () => {
      try {
        // Realizamos una solicitud GET a nuestro endpoint
        const response = await apiClient.get('/portfolio/projects'); // La ruta es relativa a la baseURL configurada
        setData(response.data); // Actualizamos el estado con los datos recibidos
        setLoading(false); // Cambiamos el estado de carga a false
      } catch (err) {
        setError(err); // Capturamos y almacenamos cualquier error ocurrido durante la solicitud
        setLoading(false); // Cambiamos el estado de carga a false
      }
    };

    fetchData(); // Llamamos a la función para obtener datos
  }, []); // El array vacío asegura que el hook se ejecute solo una vez después del primer renderizado

  // Renderizamos la UI basada en el estado
  return (
    <div>
      {loading && <p>Loading...</p>} {/* Mensaje de carga mientras se obtienen los datos */}
      {error && <p>Error: {error.message}</p>} {/* Mensaje de error si ocurre algún problema */}
      {!loading && !error && (
        <ul>
          {data.map((project, index) => (
            <li key={index}>{project}</li> // Renderizamos cada proyecto en una lista
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
