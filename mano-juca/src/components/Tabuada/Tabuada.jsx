import React from 'react'
import './Tabuada.css'

function Tabuada() {

    function gerarTabuada(){
        let n = Number(prompt("Você quer a tabuada de qual número??"))
        for(let i=1; i<=10; i++){
            let resultado = i*n
            console.log(i+'x'+n+'='+ resultado);        
        }
    }

  return (
    <div className='container-tabuada'>
        <div className="conteudo">
            <h2>Tabuada</h2>
            <button onClick={gerarTabuada}>Tabuada</button>
        </div>

    </div>
  )
}

export default Tabuada