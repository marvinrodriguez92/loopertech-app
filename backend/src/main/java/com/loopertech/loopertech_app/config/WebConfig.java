package com.loopertech.loopertech_app.config;
// Importamos las configuraciones necesarias
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Indicamos que esta es una clase de configuración de Spring
public class WebConfig {

    @Bean // Definimos un bean que configurará CORS
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Permitimos solicitudes de cualquier origen (localhost:3000)
                registry.addMapping("/**").allowedOrigins("http://localhost:3000");
            }
        };
    }
}
