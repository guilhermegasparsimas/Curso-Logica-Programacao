import { useState } from 'react'
import './App.css'

function App() {

function demonstrarWhile(){

}



function lerValores(){
  let soma = 0, valor
  let i = 0
  while (i < 3) {
    i++
    valor = Number(prompt(`Digite o ${i}o valor`))
    soma += valor
  }
  alert("Soma: " + soma)
}

function demoDoWhile(){ // garantir que o valor é positivo
  let valor 
  do{
    valor = Number(prompt("Digita um positivo:"))
  // }while(valor <= 0);
  }while(!(valor > 0));
  alert('O valor digitado foi: ' + valor)
}

function demoFor(){
  for(let i= 0; i<10; i++){
    console.log(i);
    
  }
}

  return (
    <>
      <section>
        <h2>while</h2>
        <button onClick={demonstrarWhile}>demo While</button>
        <button onClick={lerValores}>Ler Valores</button>
        <button onClick={demoDoWhile}>Do While</button>
        <button onClick={demoFor}>For</button>
      </section>
    </>
  )
}

export default App
