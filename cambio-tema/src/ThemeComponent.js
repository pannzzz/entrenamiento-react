import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Acceder al contexto

    // Estilos dinámicos dependiendo del tema
    const styles = {
        container: {
            backgroundColor: theme === 'claro' ? '#fff' : '#333',
            color: theme === 'claro' ? '#000' : '#fff',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease',
        },
        button: {
            backgroundColor: theme === 'claro' ? '#000' : '#fff',
            color: theme === 'claro' ? '#fff' : '#000',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '20px',
            transition: 'all 0.3s ease',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Tema actual: {theme}</h1>
            <button style={styles.button} onClick={toggleTheme}>Cambiar Tema</button>
        </div>
    );
};

export default ThemeComponent;
