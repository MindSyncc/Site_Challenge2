import { RegrasStyle } from "../css/RegrasStyle"
import seta from '../assets/img/home/secao/seta.png'
import imgSustentabilidade from '../assets/img/home/secao/sustentabilidade.webp'
import imgBateria from '../assets/img/home/secao/sustentabilidade.webp'
import imgEnergia from '../assets/img/home/secao/recupera-energia.png'
import imgFan from '../assets/img/home/secao/fanboost1.1.png'

const Regras = () => {

    /*
    ESTA PARTE QUE CONTROLA A EXIBIÇÃO DO CONTEÚDO DAS REGRAS NÃO FUNCIONA (FIM)

  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as setas
    const arrows = document.querySelectorAll('.arrow');
  
    // Adiciona um listener de clique para cada seta
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        const imageWrapper = this.closest('.image-wrapper');
        const description = imageWrapper.querySelector('.description, .description2');
        
  
        // Verifica se a descrição está visível
        const isVisible = description.classList.contains('show');
  
        // Toggle para mostrar/ocultar a descrição
        description.classList.toggle('show');
        
        // Toggle para girar a seta
        this.classList.toggle('rotate', !isVisible); // Adiciona a classe rotate se isVisible for false
      });
    });
  });

  ESTA PARTE QUE CONTROLA A EXIBIÇÃO DO CONTEÚDO DAS REGRAS NÃO FUNCIONA (FIM)*/ 

  return(
    <RegrasStyle>
      <div className="gallery">
          <div className="image-wrapper">
              <div className="image">
                  <img src={imgSustentabilidade} alt="Imagem 1" />
                  <h2 className="titulo-regras">Sustentabilidade</h2>
                  <div className="arrow">
                      <img src={seta} alt="" />
                  </div>
              </div>

              <div className="description">
                  <p>A Fórmula E enfatiza a sustentabilidade e a consciência ambiental, promovendo tecnologias de energia limpa e eletrificação dos transportes.</p>
              </div>
          </div>

          <div className="image-wrapper">
              <div className="image">
                  <img src={imgBateria} alt="Imagem 2" />
                  <h2 className="titulo-regras">Sustentabilidade</h2>
                  <div className="arrow">
                      <img src={seta} alt="" />
                  </div>
              </div>

              <div className="description">
                  <p>Cada carro é equipado com uma bateria padrão que fornece energia ao motor elétrico. A potência máxima do carro é limitada a 250 kW (aproximadamente 335 cavalos de potência).</p>
                  
              </div>
          </div>

          <div className="image-wrapper">
              <div className="image">
                  <img src={imgEnergia} alt="Imagem 3" />
                  <h2 className="titulo-regras">Sustentabilidade</h2>
                  <div className="arrow">
                      <img src={seta} alt="" />
                  </div>
              </div>

              <div className="description">
                  <p>Os carros da Fórmula E estão equipados com um sistema de recuperação de energia cinética (similar ao KERS da Fórmula 1), que converte a energia cinética gerada durante a frenagem de volta em energia elétrica para recarregar a bateria.</p>

              </div>
          </div>

          <div className="image-wrapper">
              <div className="image">
                  <img src={imgFan} alt="Imagem 4" />
                  <h2 className="titulo-regras">Sustentabilidade</h2>
                  <div className="arrow">
                      <img src={seta} alt="" />
                  </div>
              </div>

              <div className="description">
                  <p>Os fãs podem votar online para dar um impulso extra de potência para seus pilotos favoritos durante a corrida, através do sistema conhecido como Fanboost.</p>
              </div>
          </div>

      </div>


    </RegrasStyle>
  );
};

export default Regras