import React from 'react'
import { useState } from 'react'

function dezValores() {
    const [contador, setContador] = useState(0)


    const incrementar = (contador) => {
        setContador(contador++)
    }

  return (
    <>
    <p>Valor: {contador}</p>
    <button onClick={incrementar}></button> 
    </>
  )
}

export default dezValores