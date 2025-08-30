import './app2.css'

function App() {
const produtos = [
  {
    id: 1,
    nome: 'Mochila',
    preco: 100,
    preco_promo: 70,
    antigo: true
  },
  {
    id: 2,
    nome: 'Caderno',
    preco: 50,
    preco_promo: 35,
    antigo: false
  },
  {
    id: 3,
    nome: 'Vinho Tinto Suave',
    preco: 100,
    preco_promo: 70,
    antigo: true
  },
  {
    id: 4,
    nome: 'Vinho Tinto Seco',
    preco: 100,
    preco_promo: 70,
    antigo: false
  },
]
  return (
    <>
    <div className="container">
      <table>
        <tr>
          <td>{produtos.nome}</td>
          <td>{produtos.preco}</td>
          <td>{produtos.preco_promo}</td>
          <td>{produtos.antigo}</td>
        </tr>
      </table>

      {
        produtos.map(produtos=>(
          <div className="card" key={produtos.id}>
            <li>{produtos.nome}</li>
            <li>{produtos.preco}</li>
            <li>{produtos.preco_promo}</li>
            <li>{produtos.antigo == true ? "True": "false"}</li>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
