import React, { useState } from 'react'
import './Dino.css'

function Dino() {
    const [aposta, setAposta] = useState('')
    const dinos = ["Espinossauro", "Rex", "Braquiossauro", "Anquilossauro", 
      "Estegossauro", "Velocirraptor", "Acrocantossauro", "Giganotossauro", 
      "Carcarodontossauro", "Triceratops"]
function funcao(){
  
}
  return (
    <div className='container-dino'>
        <div className='box'></div>
        <h2>Dinos</h2>
            <div className="box-dino">

                <input type="text" placeholder='Valor da aposta' value={aposta} onChange={(e) => setAposta(e.target.value)} />

                <p></p>

                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <div></div>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>
                <button onClick={funcao} >🦍</button>

                <div>
                <button>Apostar</button>
                </div>
            </div>
    </div>
  )
}

export default Dino