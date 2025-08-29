import './App.css'

function App() {
const produtos = [
  {
    id: 1,
    nome: teste1,
    preco: 25,
    preco_promo: 15,
    antigo: antigo
  },
  {
    id: 2,
    nome: teste2,
    preco: 55,
    preco_promo: 100,
    antigo: antigo
  },
  {
    id: 3,
    nome: teste3,
    preco: 55,
    preco_promo: 100,
    antigo: antigo
  },
  {
    id: 4,
    nome: teste4,
    preco: 55,
    preco_promo: 100,
    antigo: antigo
  },
]
  return (
    <>
    <div className="container">
      {
        produtos.map(produtos, ()=>{
          <li key={produtos[0].id}></li>
        })
      }
    </div>
    </>
  )
}

export default App
