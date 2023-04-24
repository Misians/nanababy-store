import React from 'react'
import Header from '../../Components/header/Header'
import Carrossel from '../../Components/Carrossel/Carrossel'
import Card from "../../Components/Card/Card"
import Footer from "../../Components/Footer/Footer"
import Produtos from '../../Components/Produto/Produto'

export default function Home() {
  return (
    <div>
        <Header />
        <Carrossel />
        <Card />
        <Produtos />
        <Footer />
    </div>
    
  )
}
