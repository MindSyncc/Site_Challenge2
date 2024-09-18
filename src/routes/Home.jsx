import pilotos from "../assets/img/home/secao/pilotos.jpg";

const Home = () => {
  return (
    <>
      <section className="section-apresentacao">
        <h1 className="header-apresentacao">Nossos Diferenciais</h1>

        <div className="horizontal-line"></div>

        <section className="diferenciais">

          <div className="circulo ativo" id="circulo-informacao">
            <h3>Informações</h3>
          </div>

          <div className="circulo" id="circulo-experiencia">
            <h3>Experiências</h3>
          </div>

          <div className="circulo" id="circulo-recompensas">
            <h3>Recompensas</h3>
          </div>

          <div className="texto ativo" id="texto-informacao">
            <h2>
              Explore todas as informações essenciais da Fórmula E em um só
              lugar.
            </h2>
            <p>
              Desde classificações de corridas até detalhes técnicos dos carros
              e atualizações de equipes, mantemos você atualizado para que não
              perca nenhum detalhe.
            </p>
          </div>

          <div
            className="texto"
            id="texto-experiencia"
            style={{ display: "none" }}>

            <h2>
              Aprofunde-se na experiência da Fórmula E com nossas análises
              detalhadas de cada corredor.
            </h2>

            <p>
              Navegue pelos dados de desempenho individual, análises
              estatísticas e históricos de corridas para fazer suas próprias
              avaliações informadas antes de jogar.
            </p>
          </div>

          <div
            className="texto"
            id="texto-recompensas"
            style={{ display: "none" }}>

            <h2>
              Participe da emoção das corridas da Fórmula E com a chance de
              ganhar prêmios emocionantes.
            </h2>

            <p>
              Acerte os resultados das corridas, colocações ou desempenhos
              individuais e seja recompensado por sua precisão e conhecimento da
              modalidade mais eletrizante do automobilismo.
            </p>
          </div>

        </section>

      </section>

      {/*Seção das regras*/}
      <section className="secao regras">
        <div className="secao-video-img">
          <iframe
            width="600"
            height="359"
            src="https://www.youtube.com/embed/mE5c5jA2zis?si=3fc4lEIYIjzK5OGE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="secao-regras-texto">
          <h1 className="header-apresentacao">A Corrida</h1>
          <p>
            A Fórmula E é um campeonato mundial de automobilismo dedicado
            exclusivamente a carros de corrida elétricos. Fundada em 2014 pela
            Federação Internacional de Automobilismo (FIA), a Fórmula E tem como
            objetivo promover a inovação tecnológica e a sustentabilidade no
            esporte a motor, ao mesmo tempo em que oferece uma competição
            emocionante e de alta intensidade.
          </p>
          <a href="regras.html">
            <button type="button">Regras e Regulamentos</button>
          </a>
        </div>

      </section>

      <h1 className="header-apresentacao">Próximas Corridas</h1>
      <div className="horizontal-line"></div>

      <section>
        <div className="container-nextrace">

          <div className="card" id="card1">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Alemanha</p>
              <p className="desc">Data: 11 de maio de 2024</p>
              <p className="desc">Berlim</p>
              <p className="desc">Berlim E-Prix I</p>
              <div className="container-botao">
                <a href="calendario.html">
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </a>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 2</span>
            </div>
          </div>

          <div className="card" id="card2">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">China</p>
              <p className="desc">Data: 25 de maio de 2024</p>
              <p className="desc">Xangai</p>
              <p className="desc">Xangai E-Prix II</p>
              <div className="container-botao">
                <a href="calendario.html">
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </a>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 3</span>
            </div>
          </div>

          <div className="card" id="card3">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Estados Unidos</p>
              <p className="desc">Data: 29 de junho de 2024</p>
              <p className="desc">Portland</p>
              <p className="desc">Portland E-Prix I</p>
              <div className="container-botao">
                <a href="calendario.html">
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </a>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 4</span>
            </div>
          </div>

          <div className="card" id="card4">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Reino Unido</p>
              <p className="desc">Data: 20 de julho</p>
              <p className="desc">Londres</p>
              <p className="desc">Londres E-Prix I</p>
              <div className="container-botao">
                <a href="calendario.html">
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </a>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 5</span>
            </div>
          </div>

        </div>
      </section>

      {/*Seção dos pilotos*/}
      <section className="secao pilotos">

        <div className="secao-img">
          <img src={pilotos} alt="Pilotos" />
        </div>

        <div className="secao-texto">
          <h1>Pilotos</h1>
          <p>
            A Fórmula E é uma categoria de automobilismo com carros elétricos,
            focada em sustentabilidade e tecnologia. Desde 2014, atrai diversos
            pilotos talentosos, que enfrentam desafios únicos, como o
            gerenciamento de energia das baterias, equilibrando velocidade e
            eficiência. A Fórmula E promove diversidade com pilotos de várias
            nacionalidades e iniciativas inclusivas, sendo pioneiros de um
            futuro sustentável no automobilismo.
          </p>
          <a href="pilotos.html">
            <button type="button">Pilotos</button>
          </a>
        </div>

      </section>

      {/*Seção de Classificação*/}

      <h1 className="header-apresentacao">Classificação 23/24</h1>
      <div className="horizontal-line"></div>
      <section className="secao classificacao">

        <table>

          <thead>
            <tr className="tabela">
              <th title="Posição">Posição</th>
              <th title="Pilotos">Pilotos</th>
              <th title="Desempenho na Temporada" colSpan="16">
                Desempenho na Temporada
              </th>
              <th title="Pontuação">Pontuação</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td title="Posição">1</td>
              <td title="Pilotos">Cassidy</td>
              <td title="Desempenho">16</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">4</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">19</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">19</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">167</td>
            </tr>

            <tr>
              <td title="Posição">2</td>
              <td title="Pilotos">Wehrlein</td>
              <td title="Desempenho">28</td>
              <td title="Desempenho">4</td>
              <td title="Desempenho">6</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">13</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">18</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">132</td>
            </tr>

            <tr>
              <td title="Posição">3</td>
              <td title="Pilotos">Evans</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">1</td>
              <td title="Desempenho">18</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">13</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">25</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">8</td>
              <td title="Desempenho">25</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">131</td>
            </tr>

          </tbody>

        </table>

        <div className="container-botao">
          <a href="classificacao.html">
            <button id="button-classificacao" type="button">
              Clique aqui e confira a classificação completa
            </button>
          </a>
        </div>
        
      </section>
    </>
  );
};

export default Home;
