import { NoticiasStyle } from "../css/NoticiasStyle";
import React from "react";
import logo from "../assets/img/logo/logo.jpg";
import news1 from "../assets/img/home/secao/news1.webp";
import news2 from "../assets/img/home/secao/news2.png";
import news3 from "../assets/img/home/secao/news3.webp";
import news4 from "../assets/img/home/secao/news4.jpg";
import news5 from "../assets/img/home/secao/news5.webp";
import news6 from "../assets/img/home/secao/news6.png";

const Noticias = () => {
  return (
    <NoticiasStyle>
      <h1 className="h1-noticias">Notícias</h1>
      <div className="horizontal-line"></div>
      <section className="section-noticias">
        <div className="card-container-news">
          {[
            {
              image: news1,
              title: "Liberty vai comprar ações da Fórmula E",
              content: "A Liberty Global adquiriu o controle acionário...",
            },
            {
              image: news2,
              title: "Dia da Mobilidade Elétrica terá Tesla...",
              content:
                "Neste sábado, 15, acontece o Dia da Mobilidade Elétrica...",
            },
            {
              image: news3,
              title: "Fórmula E lança programa sustentável...",
              content: "A Fórmula E anunciou o Driving Force...",
            },
            {
              image: news4,
              title: "Lola Cars e Fórmula E aumentam parceria...",
              content: "A Lola Cars possui mais de 500 vitórias...",
            },
            {
              image: news5,
              title: "Fórmula E anuncia projetos sociais...",
              content: "O fundo será direcionado para iniciativas...",
            },
            {
              image: news6,
              title: "Ferrari na Fórmula E? CEO fala...",
              content: "O CEO da Fórmula E, Jeff Dodds...",
            },
          ].map((item, index) => (
            <div className="card-news" key={index}>
              <img src={item.image} alt="" />
              <div className="card-content-news">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </NoticiasStyle>
  );
};

export default Noticias;
