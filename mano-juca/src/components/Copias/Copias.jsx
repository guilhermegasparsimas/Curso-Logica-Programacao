import React from 'react'
import './Copias.css'

function Copias() {
    function gerarTabela(){
        for(let i=1; i<=500; i++){
           let preco = i * 0.33
           console.log(i + ": R$" + preco.toFixed(2).replace('.', ','));           
        }
    }
  return (
    <div className='container-copia'>
        <div className='conteudo'>
            <button onClick={gerarTabela}>Xerox</button>
        </div>
    </div>
  )
}

export default Copias