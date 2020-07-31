import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'; 

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Poesia ?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]} 
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]} 
      />

      <Footer>
        <a href="https://www.alura.com.br">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" 
          alt="Logo Alura"/>
        </a>
        <p>
          "Orgulhosamente criado durante a"
          <a href="https://www.alura.com.br">Imersão React da Alura</a>
        </p>
      </Footer>

    </div>
  );
}

export default Home;
