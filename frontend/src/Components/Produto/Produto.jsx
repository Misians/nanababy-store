import React, { useEffect, useState } from 'react';
import { FiZap, FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import BercoImg from '../../imgs/berco.png';
import CarrinhoImg from '../../imgs/carrinho.png';
import MamadeiraImg from '../../imgs/mamadeira.png';
import RoupaImg from '../../imgs/roupa.png';
import QuartoImg from '../../imgs/quarto.png';
import "./Produto.css";

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    nome: "Berço Montessoriano Nuvem 3 em 1",
    categoria: "Quarto & Berços",
    preco: "899,90",
    precoAntigo: "1.149,90",
    desconto: "-22%",
    image: BercoImg,
    bg: "#fef3c7"
  },
  {
    id: 2,
    nome: "Carrinho Travel System Comfort Baby",
    categoria: "Passeio & Segurança",
    preco: "1.249,00",
    precoAntigo: "1.590,00",
    desconto: "-21%",
    image: CarrinhoImg,
    bg: "#e0f2fe"
  },
  {
    id: 3,
    nome: "Kit Enxoval Algodão Egípcio (6 Peças)",
    categoria: "Roupas & Enxoval",
    preco: "189,90",
    precoAntigo: "249,90",
    desconto: "-24%",
    image: RoupaImg,
    bg: "#fce7f3"
  },
  {
    id: 4,
    nome: "Kit Mamadeiras Anticolica Natural Flow",
    categoria: "Alimentação",
    preco: "129,90",
    precoAntigo: "169,90",
    desconto: "-23%",
    image: MamadeiraImg,
    bg: "#dcfce7"
  },
  {
    id: 5,
    nome: "Cômoda Infantil Escandinava 4 Gavetas",
    categoria: "Móveis Infantis",
    preco: "749,90",
    precoAntigo: "920,00",
    desconto: "-18%",
    image: QuartoImg,
    bg: "#f3e8ff"
  }
];

const Produto = () => {
  const [posts, setPosts] = useState(FALLBACK_PRODUCTS);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3333/produtos/release");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data);
          }
        }
      } catch (error) {
        // Usa produtos locais de demonstração quando a API não está rodando
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="n-topo">
        <span className="promo-badge">✨ OFERTAS DA SEMANA</span>
        <p className="promo-title">NÃO PERCA NOSSA NENÊ FRIDAY!!</p>
        <p className="promo-sub">Descontos especiais toda sexta com frete rápido para todo o Brasil</p>
      </div>
      <div className="n-baixo">
        <div className="produtos">
          {posts.map((post) => (
            <div className="produto-top" key={post.id}>
              <div className="produto-unico">
                {post.desconto && <span className="discount-tag">{post.desconto}</span>}
                <div className="produto-img-box" style={{ background: post.bg || '#f0f9ff' }}>
                  <img src={post.image} alt={post.nome} />
                </div>
                <div className="conteudo">
                  <span className="cat-tag">{post.categoria || 'Enxoval & Bebê'}</span>
                  <h1 className="produto-categoria">{post.nome}</h1>
                  <div className="stars-row">
                    <FiStar fill="#f59e0b" color="#f59e0b" size={14} />
                    <FiStar fill="#f59e0b" color="#f59e0b" size={14} />
                    <FiStar fill="#f59e0b" color="#f59e0b" size={14} />
                    <FiStar fill="#f59e0b" color="#f59e0b" size={14} />
                    <FiStar fill="#f59e0b" color="#f59e0b" size={14} />
                    <span>(4.9)</span>
                  </div>
                  <div className="juntar">
                    <FiZap />
                    <p>ENTREGA RÁPIDA PARA SUA REGIÃO</p>
                  </div>
                  <div className="preco-row">
                    <div>
                      {post.precoAntigo && <span className="preco-antigo">R$ {post.precoAntigo}</span>}
                      <p className="preco-atual">R$ {post.preco}</p>
                    </div>
                    <div className="carrinho">
                      <button type="button" className="btn-fav" aria-label="Favoritar"><FiHeart /></button>
                      <button type="button" className="btn-cart" aria-label="Adicionar ao carrinho"><FiShoppingCart /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button">VER MAIS OFERTAS</div>
    </div>
  );
};

export default Produto;
