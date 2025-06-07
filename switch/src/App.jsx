
import { useState } from 'react';
import './App.css'

function App() {
const [inputDia, setInputDia] = useState('')

function executar(){
  let valor = Number(inputDia);
  switch(valor){
    case 1: alert("Domingo")
            break;
    case 2: alert("Segunda")
            break;
    case 3: alert("Terça")
            break;
    case 4: alert("Quarta")
            break;
    case 5: alert("Quinta")
            break;
    case 6: alert("Sexta")
            break;
    case 7: alert("Sábado")
            break;
    default: alert("Digita direito ai, ô")
  }
}
function executarComArray(){
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta','Sexta', 'Sábado']
let dia = Number(inputDia)

  alert(dias[dia-1])
}
function executarSwitchTrue(){
  let numero = Number(inputDia)
  switch(true){
    case numero < 8: alert("Dia Ok!")
      break
    case numero < 1 || numero > 7: alert("Domingo")
      break
    default: alert("tá bom")
    
  }
}
  return (
<div className="container-app">
    <div className='box'>
      <h2>Switch</h2>
        <div className="box-app">
          <input  type="text" placeholder='Dia' value={inputDia} onChange={(e) => setInputDia(e.target.value)} />
        </div>
        <button onClick={executar} >Executar</button>
        <button onClick={executarComArray}>Executar com array</button>
        <button onClick={executarSwitchTrue}>SWITCH</button>
    </div>
</div>
  )
}

export default App