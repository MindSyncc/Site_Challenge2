import { useState } from "react";

const ModalEquipes = ( { initialIsOpen, nameEquipe, descricao, equipeId } ) => {
  
  const [visible, setVisible] = useState(initialIsOpen);

  const toggleInfoVisibility = () => {
    setVisible(!visible);
  };

  visible
  ? document.body.classList.add('active-pop-up')
  : document.body.classList.remove('active-pop-up')

  return (
    <div className="texto">

      <h3>{nameEquipe}</h3>
      <button className="openPopupBtn" onClick={toggleInfoVisibility}>
        Saiba mais sobre a equipe {nameEquipe}
      </button>

      {visible && (
        <div id="popup1" className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={toggleInfoVisibility}>
              &times;
            </span>
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">2 / 4</div>
                <img src={`src/assets/img/equipes/andretti/${equipeId}2.jpg`} />
              </div>
              <div className="mySlides fade">
                <div className="numbertext">3 /4 </div>
                <img src={`src/assets/img/equipes/andretti/${equipeId}3.jpg`} />
              </div>
              <div className="mySlides fade">
                <div className="numbertext">4 / 4</div>
                <img src={`src/assets/img/equipes/andretti/${equipeId}4.jpg`} />
              </div>
              <div className="mySlides fade">
                <div className="numbertext">1 / 4</div>
                <img src={`src/assets/img/equipes/andretti/${equipeId}5.jpg`} />
              </div>
            </div>
            <br />
            {/* dots e circles */}
            <div>
              <span className="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(4)"></span>
            </div>
            <p className="pop-up-text">{descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEquipes;
