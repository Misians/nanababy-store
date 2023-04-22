import React, { useEffect, useState } from 'react'
import api from '../../Services/api';
import Raio from "../../imgs/raio.png";
import "./Produto.css"
import Heart from "../../imgs/heart.png";

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
            NÃO PERCA NOSSA NENÊ FRIDAY
        </div>
        <div className="n-baixo">
            <div className='produtos'>
            {posts.length === 0 ?( <p>Carregando produtos...</p>) : (
                posts.map((post) => (
                <div className='produto-top' key={post.id}>
                    <div className="produto-unico">
                        <img width={200} src={post.image} alt="" />
                        <div className="heart">
                            <img width={40} src={Heart} alt="" />
                        </div>
                        
                        <h1 className='produto-categoria' >{post.nome}</h1>
                        <img src={Raio} alt="" />
                        <p>ENTREGA RÁPIDA PARA SUA REGIÃO</p>
                        <p>{post.preco}</p>
                    </div>
                        
                </div>
                
            )))}
            </div>
        </div>
    </div>
    )}

export default Produto