import React, { useEffect, useState } from 'react'
import { FiZap, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./Produto.css"

const Produto = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try{
          const response = await fetch("http://localhost:3333/produtos/release");
          const data = await response.json();
          setPosts(data);
        }
        catch(error){
          console.log("ERROU CADLSAJDLKASJDSA");
        }
      };
      useEffect(() => {
        getPosts();
      })


  return (

    <div className="container">
        <div className="n-topo">
            <p>NÃO PERCA NOSSA NENÊ FRIDAY!!</p>
            <p>DESCONTOS TODA SEXTA!</p>
        </div>
        <div className="n-baixo">
            <div className='produtos'>
            {posts.length === 0 ?( <p>Carregando produtos...</p>) : (
                posts.map((post) => (
                <div className='produto-top' key={post.id}>
                    <div className="produto-unico">
                        <img width={250} src={post.image} alt="" />
                        <div className="conteudo">
                            <div className="carrinho">
                                <a href="/"><FiHeart /></a>
                                <a href='/'><FiShoppingCart /></a>
                            </div>
                            
                            <h1 className='produto-categoria' >{post.nome}</h1>
                            <div className="juntar">
                                <FiZap /> 
                                <p>ENTREGA RÁPIDA PARA SUA REGIÃO</p>
                            </div>
                        <p>R$ {post.preco}</p>
                        
                        </div>
                        
                    </div>
                        
                </div>
                
            )))}
            </div>
        </div>
        <div className="button">
            VER MAIS
        </div>
        
    </div>
    )}

export default Produto