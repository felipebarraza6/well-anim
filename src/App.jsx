import { useState } from 'react'
import Well from './Well'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Well />
    </>
  )
}

export default App
