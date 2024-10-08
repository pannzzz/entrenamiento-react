import React, { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("claro");

    // Función para cambiar el tema de claro a oscuro
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'claro' ? 'oscuro' : 'claro'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
