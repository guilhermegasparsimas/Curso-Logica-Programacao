// import { useState } from 'react'
import './App.css'

function App() {

  function Adivinhar(){
    let number = Math.ceil(Math.random()*10)
    let palpite = Number(prompt("Chuta ai"))

    if(palpite >= 1 && palpite <= 10 && palpite === number){
      alert('Parabéns, você acertou')
    }else{
      alert('Não desista, tente novamente!')
    }
    console.log(number);
  }

  return (
    <div className='container-app'>
      <h1>Acerte o número de 1 a 10</h1>

      <div className="">
        <button onClick={Adivinhar}>Adivinhar</button>
      </div>
    </div>
  )
}

export default App
