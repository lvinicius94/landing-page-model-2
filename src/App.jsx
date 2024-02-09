import { useState, useEffect } from 'react'
import './App.css'
import PromoCode from './PromoCode'

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
        
        <div className='menu-principal'><img src="/logo-principal-upbet.png" alt="" /><button className='botao-cadastrar-menu'><a rel='nofollow' href="https://upbet.com/ptb/authentication/signup">CADASTRE-SE</a></button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <div className='conteudo-topo'>
                  <h1>Receba uma aposta grátis para as finais dos campeonatos estaduais!</h1>
                  <p className='texto-oferta'>Dê um UP na sua aposta como milhares de jogadores</p>
                  <img src="/vinte-reais-bonus-img.png" alt="" />
                  </div>
                  <div className='config-botao-banner'>
                      <button className='botao-cadastrar-banner'><a rel='nofollow' href="https://upbet.com/ptb/authentication/signup">RESGATE SUA FREEBET</a></button>
                      <PromoCode />
                     <p>promocode: ESTADUAIS</p>
                     
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
                      <img src="/gates-of-olympus-rodadas-gratis.png" alt="" />        
                      <h3>Rodadas grátis</h3>
                      <p>(Ganhe até 200 rodadas grátis)</p>                    
                </div>
                <div className='card-one'>
                      <img src="/indique-e-ganhe.jpeg" alt="" />
                      <h3>Indique e ganhe</h3>
                      <p>(Ganhe R$ 30 de saldo REAL)</p>  
                </div>
                <div className='card-one'>
                      <img src="/cashback-20.png" alt="" />
                      <h3>Receba Cashbacks</h3>
                      <p>(Ganhe até 20% de retorno)</p>  
                </div>
                <div className='card-one'>
                      <img src="/sorteio-telegram.jpeg" alt="" />
                      <h3>Grupo Telegram</h3>
                      <p>(Sorteios exclusivos)</p>  
                </div>
                <div className='card-one-icon'>
                      <img src="/beneficio-pix.png" alt="" />
                      <h3>receba pagamentos em pix</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/beneficio-atendimento.png" alt="" />
                      <h3>suporte ao jogador 24 horas</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/beneficio-seguranca.png" alt="" />
                      <h3>registro e verificações</h3>                       
                </div>
                <div className='card-one-icon'>
                      <img src="/melhores-odds.png" alt="" />
                      <h3>Melhores Odds</h3>                       
                </div>
            </div>
           
            {/* Render the button only if showButton is true */}
            {showButton && (
              <button onClick={scrollToTop} className='botao-fixo-segunda-dobra'><a rel='nofollow' href="https://upbet.com/ptb/authentication/signup">RESGATE SUA FREEBET</a></button>  
            )}
       
              
        </div>
        
      </div>

  )
}

export default App
