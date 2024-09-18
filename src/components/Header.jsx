import logo from "../assets/img/logo/logo.jpg";
import { HeaderStyle } from "../css/HeaderStyle";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';  


  return (

    <HeaderStyle isHome = {isHome}>
        <section className="container-header">
          <header id="header">
            <div className="logo-container">
              <Link to={'/home'}>
                <img src={logo} alt="Formula E Logo" id="logo" />
                <span id="formula">Fórmula </span>
                <span id="e">E</span>
              </Link>
            </div>
            <nav className="navbar">
              <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <ul className="nav-list">
                <li className="navlink">
                  <Link to={'/regras'}>Regras</Link>
                </li>
                <li className="navlink">
                  <Link to={'/calendario'}>Calendario</Link>
                </li>
                <li className="navlink">
                  <Link to={'/pilotos'}>Pilotos</Link>
                </li>
                <li className="navlink">
                  <Link to={'/classificacao'}>Classificação</Link>
                </li>
                <li className="navlink">
                  <Link to={'/equipes'}>Equipes</Link>
                </li>
                <li className="navlink">
                  <Link to={'/noticias'}>Noticias</Link>
                </li>
                <li className="navlink">
                  <Link to={'/jogo'}>Jogo</Link>
                </li>
                <li className="navlink" id="login">
                  <Link to={'/login'}>Login</Link>
                </li>
              </ul>
            </nav>
          </header>
        </section>
    </HeaderStyle>
  );
}

export default Header
