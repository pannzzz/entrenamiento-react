import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [gameStatus, setGameStatus] = useState('Fuera del juego');

    const toggleGameStatus = () => {
        setGameStatus((prevStatus) =>
            prevStatus === 'Fuera del juego' ? 'Dentro del juego' : 'Fuera del juego'
        );
    };

    return (
        <GameContext.Provider value={{ gameStatus, toggleGameStatus }}>
            {children}
        </GameContext.Provider>
    );
};
