import logo from "../assets/img/logo/logo.jpg";
import { HeaderStyle } from "../css/HeaderStyle";

const Header = () => {
  return (

    <HeaderStyle>
        <section className="container-header">
          <header id="header">
            <div className="logo-container">
              <a href="index.html">
                <img src={logo} alt="Formula E Logo" id="logo" />
                <span id="formula">Fórmula </span>
                <span id="e">E</span>
              </a>
            </div>
            <nav className="navbar">
              <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <ul className="nav-list">
                <li className="navlink">
                  <a href="regras.html">Regras</a>
                </li>
                <li className="navlink">
                  <a href="calendario.html">Calendário</a>
                </li>
                <li className="navlink">
                  <a href="pilotos.html">Pilotos</a>
                </li>
                <li className="navlink">
                  <a href="classificacao.html">Classificação</a>
                </li>
                <li className="navlink">
                  <a href="equipes.html">Equipes</a>
                </li>
                <li className="navlink">
                  <a href="noticias.html">Notícias</a>
                </li>
                <li className="navlink">
                  <a href="jogos.html">Jogo</a>
                </li>
                <li className="navlink" id="login">
                  <a href="login.html">Login</a>
                </li>
              </ul>
            </nav>
          </header>
        </section>
    </HeaderStyle>
  );
}

export default Header
