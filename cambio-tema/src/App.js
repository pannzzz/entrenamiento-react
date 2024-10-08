import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeComponent from './ThemeComponent';

function App() {
    return (
        <ThemeProvider>
            <ThemeComponent />
        </ThemeProvider>
    );
};

export default App;
