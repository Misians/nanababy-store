import React from 'react'
import './Card.css'
import Imagem from  '../../imgs/img.png'

const Card = () => {
  return (
    <div className='App'>
        <div className='Card-container'>
            <h1>🤱DO JEITINHO QUE SEU NENÊ  GOSTA👶</h1>
            <h2>🍼 DO JEITINHO QUE ELE PRECISA 🍭</h2>
            
        </div>
        <div className="n-imagem">
            <img src={Imagem} alt="" />
        </div>
    </div>
  )
}

export default Card