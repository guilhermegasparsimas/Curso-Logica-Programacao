import { useState } from 'react'
import './App.css'
import Dino from './components/Dino'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container-app">
        <Dino />
    </div>
    </>
  )
}

export default App
