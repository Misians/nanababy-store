import React, { useEffect, useState } from 'react'

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
            <div className='produto-unico' key={post.id}>
              <h1 className='produto-categoria' >{post.nome}</h1>
            </div>
          ))
        )}
        </div>
    </div>
        
    </div>

    )
}

export default Produto