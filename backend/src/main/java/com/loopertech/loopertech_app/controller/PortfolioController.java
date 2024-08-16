package com.loopertech.loopertech_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para manejar las solicitudes relacionadas con el portafolio de servicios.
 */
@RestController
@RequestMapping("/api") // Configura la ruta base para todas las solicitudes en este controlador
public class PortfolioController {

    /**
     * Maneja las solicitudes GET a la ruta "/api/portfolio".
     * @return Un mensaje que representa la página de portafolio de servicios.
     */
    @GetMapping("/portfolio")
    public String portfolio() {
        return "This is the portfolio of services offered by Loopertech.";
    }
}
