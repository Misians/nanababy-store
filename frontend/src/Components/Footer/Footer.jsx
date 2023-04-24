import React from 'react'
import './Footer.css'
import Logo from '../../imgs/icone.png'

const Footer = () => {
  return (
    <div>
        <div className='footer-c'>
            <ul>
                <li>Loja Virtual</li>
                <li>NanaBaby</li>
            </ul>
            <ul>
                <li>Conheça a lista</li>
                <li>Chá de bebê</li>
                <li>Montar lista</li>
                <li>Lista de enxoval completa</li>
            </ul>
            <ul>
                <li>Institucional</li>
                <li>Empresa</li>
                <li>Endereço lojas</li>
                <li>Política de privacidade</li>
            </ul>
            <ul>
                <li>Meu NanaBaby</li>
                <li>Meus pedidos</li>
                <li>Meus Dados</li>
                <li>Newsletter</li>
            </ul>
            <img width={60} height={60} src={Logo} alt="" />
        </div>
        <div className="copy">
            <p>© COPYRIGHT NanaBaby TODOS OS DIREITOS RESERVADOS - TELEFONE: (84) 987934150</p>
        </div>
    </div>
  )
}

export default Footer