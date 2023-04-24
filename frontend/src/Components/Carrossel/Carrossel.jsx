import React from 'react'
import './Carrossel.css'
import Berco from '../../imgs/berco.png'
import Mamadeira from '../../imgs/mamadeira.png'
import Carrinho from '../../imgs/carrinho.png'
import Roupa from '../../imgs/roupa.png'
import Quarto from '../../imgs/quarto.png'


const Carrossel = () => {
    const menu = [
        {nome: 'BERÇOS', icon: Berco},
        {nome: 'QUARTOS', icon: Quarto},
        {nome: 'ROUPAS', icon: Roupa},
        {nome: 'MAMADEIRA', icon: Mamadeira},
        {nome: 'CARRINHOS', icon: Carrinho},
    ]

    return (
    <div className='a-container'>
         <ul className='icones1'>
                {
                    menu.map(menuopt => 
                        <li className='lista'>
                            <a className='a' href='/'>
                            <img src={menuopt.icon} alt='aaaa' className='icones_img1'></img>
                            <p className='nome_categoria'>{menuopt.nome}</p></a>
                        </li>
                    )
                }
            </ul>
    </div>
  )
}

export default Carrossel