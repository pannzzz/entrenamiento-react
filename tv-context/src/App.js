import React from 'react';
import { GameProvider } from './GameProvider';
import GameComponent from './GameComponent';

const App = () => {
    return (
        <GameProvider>
            <GameComponent />
        </GameProvider>
    );
};

export default App;
