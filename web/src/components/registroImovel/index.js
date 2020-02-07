import React, {useState, useMemo} from 'react'
import './style.css'
import api from '../../services/api'
import camera from '../../assets/camera.svg';

function ImovelForm({onSubmit}) {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [area_total, setAreaTotal] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [preco, setPreco] = useState('')
    const [detalhes, setDetalhes] = useState('')
    let [imagens, setImagens] = useState(null)

    
  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('titulo', titulo);
    data.append('categoria', categoria);
    data.append('area_total', area_total);
    data.append('localizacao', localizacao);
    data.append('preco', preco);
    data.append('detalhes', detalhes);
    data.append('imagens', imagens);

    await api.post('/cadastro-imoveis', data)

    setTitulo('')
    setCategoria('')
    setAreaTotal('')
    setPreco('')
    setLocalizacao('')
    setDetalhes('')
    setImagens(null)

  }

    const preview = useMemo(() => {
      return imagens ? URL.createObjectURL(imagens) : null;
    }, [imagens])

  return (
    <form onSubmit={handleSubmit}>
      <strong className="strong-title">Cadastrar Imóvel</strong>
      <div className="input-block">
        <label htmlFor="titulo">Titulo do Imóvel</label>
        <input 
        name="titulo" 
        id="titulo" 
        required 
        value={titulo} 
        onChange={e => setTitulo(e.target.value)} />
      </div>

      <div className="input-block">
        <label htmlFor="categoria">Categoria do Imóvel</label>
        <input 
        name="categoria" 
        id="categoria" 
        required 
        value={categoria} 
        onChange={e => setCategoria(e.target.value)} />
      </div>

      <div className="input-block">
        <label htmlFor="area_total">Área em m²</label>
        <input 
        name="area_total" 
        id="area_total" 
        required 
        value={area_total} 
        onChange={e => setAreaTotal(e.target.value)} />
      </div>

      <div className="input-block">
        <label htmlFor="localizacao">Localização (Cidade-Estado)</label>
        <input 
        name="localizacao" 
        id="localizacao" 
        required 
        value={localizacao} 
        onChange={e => setLocalizacao(e.target.value)} />
      </div>

      <div className="input-block">
        <label htmlFor="preco">Valor do Imóvel</label>
        <input 
        name="preco" 
        id="preco" 
        required 
        value={preco} 
        onChange={e => setPreco(e.target.value)} />
      </div>

      <div className="input-block">
        <label htmlFor="detalhes">Detalhes do Imóvel</label>
        <input
        name="detalhes" 
        id="detalhes" 
        required 
        value={detalhes} 
        onChange={e => setDetalhes(e.target.value)} />
      </div>
      <div className="input-block">
        <label htmlFor="imagens">Selecione sua Imagem</label>
        <label 
          id="thumbnail" 
          style={{ backgroundImage: `url(${preview})` }}
          className={imagens ? 'has-thumbnail' : ''}
        >
          <input type="file" multiple onChange={event => setImagens(event.target.files[0])} />
          <img src={camera} alt="Select img" />
        </label>
      </div>
      <button type="submit">Cadastrar Imóvel</button>
    </form>
  )
}

export default ImovelForm