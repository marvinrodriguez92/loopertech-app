package com.loopertech.loopertech_app.controllers;

// Importaciones necesarias para manejar solicitudes HTTP y datos
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

// Anotación que indica que esta clase es un controlador REST
@RestController
// Ruta base para todas las solicitudes manejadas por este controlador
@RequestMapping("/api/portafolio")
public class PortafolioController {

    // Método que maneja las solicitudes GET a la ruta "/projects"
    @GetMapping("/projects")
    public List<String> getPortafolioProjects() {
        // Devuelve una lista de proyectos como ejemplo
        return Arrays.asList("Project A", "Project B", "Project C");
    }
}
