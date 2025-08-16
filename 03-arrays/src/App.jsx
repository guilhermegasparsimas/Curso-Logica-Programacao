import { useState } from 'react'
import './App.css'

function App() {
  // const estado =  useState()
  // const [estado, setEstado] =  useState()
  // const [auditoria, setAuditoria] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  const [min, setMin] = useState([])
  const [max, setMax] = useState([])

  // const [estado, setEstado] = useState()

  function gerar(){
    // Math.round   arredonda pro inteiro mais próximo  (round = redondo)  
    // Math.ceil()  arredonda pra cima                  (ceil = teto)
    // Math.floor() arredonda pra baixo                 (floor = piso)

    // let tempMin = min
    // let tempMax = max

    let tempMin = [...min]
    let tempMax = [...max]

    for(let i=0; i<30; i++){

      let n1 = Math.floor(Math.random() * 24 + 12)
      let n2 = Math.floor(Math.random() * 24 + 12)
  
  
      if(n1 > n2){
        tempMax.push(n1)
        tempMin.push(n2)
      }
      else{
        tempMax.push(n2)
        tempMin.push(n1)
      }

    }
    // console.table(tempMin)
    // console.table(tempMax)
    
    setMax(tempMax)
    setMin(tempMin)
    }

    // for(let i = 0; i<10000; i++){
    //   let n = Math.floor(Math.random() * 24 + 12) 
    //   temp[n]++
    // }
  return (
    <>
      <button onClick={gerar}>gerar número</button>
      {min.length}
      {max.length}
      <div>
        {min.map((minima, index) => (
          <p key={index}>
            {minima}
          </p>
        ))}
      </div>
      
    </>
  )
}

export default App
