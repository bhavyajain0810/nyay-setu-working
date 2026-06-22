package com.nyaysetu.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

/**
 * Centralized Role-Based Access Control (RBAC) security engine.
 * Activates Spring Security's pre-post method-level authorization interceptor matrix.
 */
@Configuration
@EnableMethodSecurity(
    prePostEnabled = true, 
    securedEnabled = true, 
    jsr250Enabled = true
)
public class SecurityMethodConfig {
    // Global method security interceptor filters initialized successfully
}

