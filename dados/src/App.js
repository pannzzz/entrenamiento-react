import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animación para simular la tirada de los dados
const roll = keyframes`
0%, 100% { transform: rotate(0); }
25% { transform: rotate(90deg); }
50% { transform: rotate(180deg); }
75% { transform: rotate(270deg); }
`;

// Estilo para el dado
const DadoContainer = styled.div`
width: 120px;
height: 120px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f2f2f2;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
animation: ${({ rodando }) => (rodando ? roll : 'none')} 0.6s ease;
position: relative;
`;

// Estilos para los puntos del dado (dot)
const Dot = styled.div`
width: 20px;
height: 20px;
background-color: black;
border-radius: 50%;
position: absolute;
`;

const diceFaces = {
1: [<Dot style={{ top: '40%', left: '40%' }} />],
2: [
    <Dot style={{ top: '20%', left: '20%' }} />,
    <Dot style={{ top: '60%', left: '60%' }} />,
],
3: [
    <Dot style={{ top: '20%', left: '20%' }} />,
    <Dot style={{ top: '40%', left: '40%' }} />,
    <Dot style={{ top: '60%', left: '60%' }} />,
],
4: [
    <Dot style={{ top: '20%', left: '20%' }} />,
    <Dot style={{ top: '20%', left: '60%' }} />,
    <Dot style={{ top: '60%', left: '20%' }} />,
    <Dot style={{ top: '60%', left: '60%' }} />,
],
5: [
    <Dot style={{ top: '20%', left: '20%' }} />,
    <Dot style={{ top: '20%', left: '60%' }} />,
    <Dot style={{ top: '40%', left: '40%' }} />,
    <Dot style={{ top: '60%', left: '20%' }} />,
    <Dot style={{ top: '60%', left: '60%' }} />,
],
6: [
    <Dot style={{ top: '20%', left: '20%' }} />,
    <Dot style={{ top: '20%', left: '60%' }} />,
    <Dot style={{ top: '40%', left: '20%' }} />,
    <Dot style={{ top: '40%', left: '60%' }} />,
    <Dot style={{ top: '60%', left: '20%' }} />,
    <Dot style={{ top: '60%', left: '60%' }} />,
],
};

// Componente funcional 'Dado'
const Dado = ({ valor, rodando }) => {
return <DadoContainer rodando={rodando}>{diceFaces[valor]}</DadoContainer>;
};

// Estilo para la página
const PageContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #e9e9e9;
`;

// Estilo para el contenedor de los dados
const DiceContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

// Estilo para el botón
const Button = styled.button`
padding: 10px 20px;
margin-top: 20px;
background-color: #BB9AB1;
color: black;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;

&:hover {
    background-color: #987D9A;
}
`;

function App() {
const [dados, setDados] = useState([1, 1, 1]);
const [rodando, setRodando] = useState(false);

// Función para generar un número aleatorio entre 1 y 6 para cada dado
const tirarDados = () => {
    setRodando(true);
    setTimeout(() => {
    const nuevosValores = dados.map(() => Math.floor(Math.random() * 6) + 1);
    setDados(nuevosValores);
    setRodando(false);
    }, 600); // Simulación de 0.6s de rodado antes de mostrar el resultado final
};

return (
    <PageContainer>
    <h1>Juego de Dados</h1>
    <DiceContainer>
        <Dado valor={dados[0]} rodando={rodando} />
        <Dado valor={dados[1]} rodando={rodando} />
        <Dado valor={dados[2]} rodando={rodando} />
    </DiceContainer>
    <Button onClick={tirarDados} disabled={rodando}>
        {rodando ? 'Rodando...' : 'Tirar Dados'}
    </Button>
    </PageContainer>
);
}

export default App;
