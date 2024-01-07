package com.Bhoomika.TaskManagementSystem;
// src/main/java/com/yourpackage/YourApplication.java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/tasks/**")  // Adjust this URL pattern to match your API endpoints
                        .allowedOrigins("http://192.168.78.43:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE","XMLHttpRequest");
            }
        };
    }
}
