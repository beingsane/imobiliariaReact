import React, {useEffect, useState} from 'react'
import './style.css'
import api from '../../services/api'

function ImovelItem({imovel}) {

  const [img, setImg] = useState([])

  useEffect (() => {
    async function loadImg () {
      const response = await api.get(`/uploads/${imovel.imagens}`)

      setImg(response.data)
    }

    loadImg()
  }, [imovel.imagens])

  return (
    <li className="imovel-item">
      <img src='' alt="thumb"/>
      `${console.log(img[0])}`
        <div className="thumb-content">
          <span> {imovel.categoria} - {imovel.localizacao}</span>
          <strong>R${imovel.preco}</strong>
        </div>
    </li>
  )
}

export default ImovelItem
