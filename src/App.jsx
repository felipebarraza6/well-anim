import { useState } from 'react'
import PozoDigital from './components/PozoDigital'
import './App.css'

function App() {
  const [nivel, setNivel] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <PozoDigital nivel={nivel} />
    </div>
  )
}

export default App