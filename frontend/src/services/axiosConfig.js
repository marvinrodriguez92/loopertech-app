// Importamos Axios
import axios from 'axios';

// Creamos una instancia de Axios con configuración predeterminada
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // URL base para el backend
  timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
});

// Exportamos la instancia para usarla en otros archivos
export default apiClient;
