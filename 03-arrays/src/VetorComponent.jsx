import React, { useEffect, useState } from 'react';

function VetorComponent() {

    const [valor] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [valorInvertido, setValorInvertido] = useState([]);

    const converterIndices= () => {
        const novoVetor = [];

        for(let i=0; i < valor; i++){
            novoVetor[i] = valor[valor.length -1 -i];
        }
        setValorInvertido(novoVetor);
    }

  return (
    <>
    <h2>Vetor Original</h2>
    <p>{valor.join(', ')}</p>     
    <button onClick={converterIndices}>Inverter Indices</button>

    {valor.length > 0 && (
        <>
            <h1>Vetor com índices invertidos</h1>
            <p>{valorInvertido.join(', ')}</p>
        </>
    )}
    </>
  )
}

export default VetorComponent;
