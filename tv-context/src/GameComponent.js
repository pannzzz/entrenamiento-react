// src/GameComponent.js
import React, { useContext } from 'react';
import { GameContext } from './GameProvider';
import './fonts/fonts.css';

const GameComponent = () => {
    const { gameStatus, toggleGameStatus } = useContext(GameContext); // Acceder al contexto

    // Estilos dinámicos dependiendo del estado del juego
    const styles = {
        container: {
            backgroundColor: gameStatus === 'Dentro del juego' ? '#D8D2C2' : '#181C14',
            color: '#fff',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease',
        },
        button: {
            backgroundColor: gameStatus === 'Dentro del juego' ? '#2E073F' : '#AD49E1',
            color: '#fff',
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
            color: gameStatus === 'Dentro del juego' ? '#000' : '#fff', // Cambia a negro dentro del juego
        },
        tv: {
            width: '320px',
            height: '260px',
            backgroundColor: gameStatus === 'Dentro del juego' ? '#000' : '#222',
            border: '16px solid #555',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,0,0,0.6), inset 0 0 10px rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: '30px', // Espacio para la consola debajo
        },
        screen: {
            width: '280px',
            height: '200px',
            backgroundColor: gameStatus === 'Dentro del juego' ? '#D7C3F1' : '#222', // Cambiar a blanco dentro del juego
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', // Mostrar "GAME" y el texto adicional uno debajo del otro
            filter: gameStatus === 'Dentro del juego' ? 'none' : 'brightness(0.5)',
            boxShadow: 'inset 0 0 2px #8C3061, 0 0 8px #522258', // Pixel style
        },
        pixelText: {
            color: '#2E073F',
            fontFamily: 'Silkscreen, sans-serif',
            fontSize: '30px',
            letterSpacing: '4px',
            textShadow: '0 0 5px #17153B', // Glow effect
        },
        statusText: {
            color: gameStatus === 'Dentro del juego' ? '#2E073F' : '#fff', // Cambiar a blanco si está apagado
            fontFamily: 'Concert One, sans-serif',
            fontSize: '12px',
            letterSpacing: '2px',
            marginTop: '10px',
        },
        controls: {
            width: '320px',
            height: '60px',
            backgroundColor: '#333',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.7)',
        },
        controlKnob: {
            width: '40px',
            height: '40px',
            backgroundColor: '#777',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.6)',
        },
        console: {
            width: '100px',
            height: '20px',
            backgroundColor: '#555',
            borderRadius: '4px',
            boxShadow: 'inset 0 0 2px rgba(0,0,0,0.6)',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{gameStatus}</h1>
            {/* Televisor */}
            <div style={styles.tv}>
                <div style={styles.screen}>
                    {gameStatus === 'Dentro del juego' && (
                        <>
                            <span style={styles.pixelText}>GAME</span>
                            <span style={styles.statusText}>DENTRO DEL JUEGO</span>
                        </>
                    )}
                    {gameStatus === 'Fuera del juego' && (
                        <span style={styles.statusText}>FUERA DEL JUEGO</span>
                    )}
                </div>
            </div>
            {/* Controles del televisor */}
            <div style={styles.controls}>
                <div style={styles.controlKnob}></div>
                <div style={styles.controlKnob}></div>
                <div style={styles.console}></div>
            </div>
            <button style={styles.button} onClick={toggleGameStatus}>
                Cambiar Estado del Juego
            </button>
        </div>
    );
};

export default GameComponent;
