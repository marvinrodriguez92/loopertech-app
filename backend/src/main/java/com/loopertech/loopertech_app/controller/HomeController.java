package com.loopertech.loopertech_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para manejar las solicitudes relacionadas con la página de inicio.
 */
@RestController
@RequestMapping("/api") // Configura la ruta base para todas las solicitudes en este controlador
public class HomeController {

    /**
     * Maneja las solicitudes GET a la ruta "/api/home".
     * @return Un mensaje de bienvenida para la página de inicio.
     */
    @GetMapping("/home")
    public String home() {
        return "Welcome to the Loopertech homepage!";
    }
}
