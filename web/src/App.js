import React, { useEffect , useState} from 'react'
import api from './services/api'
import './style.css'
import ImovelItem from './components/imovelItem'
import ImovelForm from './components/registroImovel'

function App() {
  const [imoveis, setImoveis] = useState([])

  useEffect (() => {
    async function loadImoveis () {
      const response = await api.get('/imoveis')

      setImoveis(response.data)
    }

    loadImoveis()
  }, [])

  async function handleAddImovel(data) {
    const response = await api.post('/cadastro-imoveis', data)

    setImoveis([...imoveis, response.data])
  }

  return(
    <>
      <main>
        <ul>

          {imoveis.map(imovel => (
          <ImovelItem key={imovel._id} imovel={imovel}/>
          ))}
          <li className="imovel-item">
            <img src="https://imobiliariafuji.com.br/wp-content/uploads/01-392.jpg" alt="thumb"/>
            <div className="thumb-content">
              <span> Casa - 2 dormitórios</span>
              <strong>R$250.000,00</strong>
            </div>
          </li>

          <li className="imovel-item">
            <img src="https://imobiliariafuji.com.br/wp-content/uploads/01-392.jpg" alt="thumb"/>
            <div className="thumb-content">
              <span> Casa - 2 dormitórios</span>
              <strong>R$250.000,00</strong>
            </div>
          </li>

          <li className="imovel-item">
            <img src="https://imobiliariafuji.com.br/wp-content/uploads/01-392.jpg" alt="thumb"/>
            <div className="thumb-content">
              <span> Casa - 2 dormitórios</span>
              <strong>R$250.000,00</strong>
            </div>
          </li>

        </ul>
      </main>
      <>
      <ImovelForm onSubmit={handleAddImovel}/>
      </>
    </>
  )
}

export default App