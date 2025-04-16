import { useState } from 'react'
import PozoDigital from './components/PozoDigital'
import './App.css'

function App() {
  const [nivel, setNivel] = useState(4.2) // Nivel en metros

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <PozoDigital nivel={nivel} />

      {/* Botones para probar subir o bajar el nivel */}
      <div className="mt-4 space-x-4">
        <button onClick={() => setNivel(n => n + 0.5)} className="px-4 py-2 bg-green-500 text-white rounded">Subir</button>
        <button onClick={() => setNivel(n => n - 0.5)} className="px-4 py-2 bg-red-500 text-white rounded">Bajar</button>
      </div>
    </div>
  )
}

export default App