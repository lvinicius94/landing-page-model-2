import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [showButton, setShowButton] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Set showButton to true if scroll position is greater than or equal to a certain value
        setShowButton(scrollPosition >= 500); // Change 500 to your desired scroll position
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect only runs once

    // Function to handle button click
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    };

  return (
      <div className='div-principal-lp'>
        <img className='imagem-fundo-principal' src="/fundo-freebet.png" alt="Imagem de um estádio de futebol representando a freebet" />
        <div className='menu-principal'><img src="/logo-principal-upbet.png" alt="" /><button className='botao-cadastrar-menu'>CADASTRE-SE</button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <div className='conteudo-topo'>
                  <h1>GANHE UM BÔNUS DE BOAS-VINDAS EM SEU DEPÓSITO</h1>
                  <p className='texto-oferta'>Dê um UP na sua aposta como milhares de jogadores</p>
                  <img src="/vinte-reais-bonus-img.png" alt="" />
                  </div>
                  <div className='config-botao-banner'>
                      <button className='botao-cadastrar-banner'>RESGATE SUA FREEBET</button>
                     <p className='texto-oferta2'>*oferta disponível para todos!</p>
                     <h2 className='subtitulo-h2'>ENTRE NO SITE DA UP</h2>
                     <p>(Abra uma conta, se já não tiver uma)</p>

                     <h2 className='subtitulo-h2'>Deposite a partir de R$ 20</h2>
                     <p>(Lembre-se de usar o promocode)</p>

                     <h2 className='subtitulo-h2'>Aproveite R$ 20 de FREEBET</h2>
                     <p>(Corra que é válido apenas para a final)</p>
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="/fundo-gates-2.png" alt="" />
              </div>
        </div>
        <div className='div-segunda-dobra'>
            <h2>O que a UPBET oferece?</h2>
            <div className='primeira-grid'>
                <div className='card-one'>
                      <img src="/image-card-game.png" alt="" />        
                      <h3>Rodadas grátis</h3>
                      <p>(Um ótimo bônus de primeiro depósito sem rollover de até 200 rodadas grátis)</p>                    
                </div>
                <div className='card-one'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>Indique e ganhe</h3>
                      <p>(Ganhe R$ 30 de saldo REAL para cada amigo cadastrado com seu link)</p>  
                </div>
                <div className='card-one'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>Cashbacks</h3>
                      <p>(Múltiplas promoções de cashbacks em cassino ao vivo, slots e crash games)</p>  
                </div>
                <div className='card-one'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>Saque rápido PIX</h3>
                      <p>(O saque sai rapidinho, e conte com nosso suporte 24h para qualquer problema)</p>  
                </div>
                <div className='card-one-icon'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>pagamentos em pix</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>suporte ao jogador 24/7</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>regustri e verificações</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/image-card-game.png" alt="" />
                      <h3>800.000 eventosao vivo por ano</h3>                       
                </div>
            </div>
           
            {/* Render the button only if showButton is true */}
            {showButton && (
              <button onClick={scrollToTop} className='botao-fixo-segunda-dobra'>RESGATE SUA FREEBET</button>  
            )}
       
              
        </div>
        
      </div>

  )
}

export default App
