import { useState } from 'react'
import './App.css'

function App() {
  const [inputMarujos, setInputNumeroMarujos] = useState('')
  const [inputDiaDeEvento, setInputDiaDeEvento] = useState('')
  const [informacao, setInformacao] = useState('')

  const [sabeNadar, setSabeNadar] = useState('')
  const [idade, setIdade] = useState('')
  const [temRecomendacao, setTemRecomendacao] = useState('')

  function verificar(){
    if(inputMarujos >= 10 || inputDiaDeEvento >= 1){
      setInformacao("Podem Viajar")
    } else {
      setInformacao("Não podem Viajar")
    }
  }

  return (
<>

  <div className="container-app">

    <h2>Hello Captain Goose 🪝🏴‍☠️</h2>

    <input placeholder='Número Marujos' type="text" value={inputMarujos} onChange={(e) => setInputNumeroMarujos(e.target.value)}/>
     <p></p>
    <input placeholder='Dia de Evento' type="text" value={inputDiaDeEvento} onChange={(e) => setInputDiaDeEvento(e.target.value)}/>
    <p></p>
    <button className='button-verificar' onClick={verificar}>Verificar</button>
    <p></p>
    Resposta: {informacao}

  </div>
</>
  )
}

export default App