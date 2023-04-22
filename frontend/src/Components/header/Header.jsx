import React from 'react'
import Banner from '../../imgs/fundo.png'
import Icon from '../../imgs/icone.png'
import './Header.css'

const Header = () => {
  return (
    <div className='app_navbar'>
        <div className="banner_imagem"><img src={Banner} alt="" />     
        </div>
        <div className="navbar">
            <ul>
                <li>HOME</li>
                <li>CATEGORIA</li>
                <li>PERSONALIZADOS</li>

            <img src={Icon} alt="" />

                <li>CARRINHO</li>
                <li>FAVORITO</li>
                <li>MINHAS COMPRAS</li>
            </ul>
        </div>
    </div>
  )
}

export default Header