import { useState, useEffect } from 'react';
import Well from './Well';
import './App.css';

function App() {
  const [profundidad, setProfundidad] = useState(50); // Estado inicial de profundidad

  // Función para actualizar la profundidad con un valor aleatorio
  const handleProfundidadChange = () => {
    const nuevaProfundidad = Math.floor(Math.random() * 101); // Número aleatorio entre 0 y 100
    setProfundidad(nuevaProfundidad);
  };
  // Función para actualizar el nivel del agua visualmente
  const actualizarNivelAgua = (profundidad) => {
    const nivelAgua = document.getElementById('nivel-agua');
    if (nivelAgua) {
      // Mapear profundidad (0-100) a altura (0-70%) - Ajusta según tus necesidades
      const alturaNivel = 70 - (profundidad * 0.7);
      nivelAgua.style.height = `${alturaNivel}%`;
    }
  };

  // Intervalo para simular cambios en la profundidad
  useEffect(() => {
    const intervalId = setInterval(handleProfundidadChange, 2000); // Cambia cada 2 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);
  return (
    <Well />
  );
}

export default App;