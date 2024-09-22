import styled from "styled-components";
import car from "../assets/img/home/carrousel/car.jpg";



export const HeaderStyle = styled.section`
  .container-header {
    background: url(${car});
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    
  }

  .header-not-in-home{
    background: black;
    height: 100%;
  }

  .header-not-in-home #header{
    background: none;
  }

  .container-header #formula {
    font-size: 3.5rem;
    font-family: "Roboto Mono", monospace;
    font-weight: 100;
  }

  .container-header #e {
    font-size: 4rem;
    color: red;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
    font-weight: 300;
  }

  #header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.2);
    height: 80px;
    width: auto;
    position: relative;
    z-index: 10;
  }

  .logo-container {
    background-color: #010f1c;
    color: white;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    font-family: "Roboto Mono", monospace;
    font-style: italic;
    font-weight: 100;
    height: 80px;
  }

  .container-header a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
  }

  #logo {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    /* Logo nunca excede o tamanho do contêiner */
    height: 80px;
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    text-align: right;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
  }

  .mobile-menu {
    cursor: pointer;
    display: none;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    margin: 8px;
    background-color: #fff;
  }

  .nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-list li {
    letter-spacing: 3px;
    margin-left: auto;
    padding: 10px;
  }

  .navlink a {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
  }

  #login a {
    color: #17aa40;
  }

  .navlink a:hover {
    color: #e01600;
  }

  #login a:hover {
    color: #3cff00;
  }

  @media (max-width: 1200px) {
    body {
      overflow-x: hidden;
    }

    .logo-container {
      background-color: rgba(217, 217, 217, 0);
      margin: 0;
      padding: 0;
    }

    #logo {
      width: 6.4rem;
      height: auto;
    }

    .nav-list {
      position: absolute;
      top: 6.4rem;
      right: 0;
      width: 50vw;
      height: 100vh;
      background-color: #000000;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
    }

    .navlink a {
      font-size: 1.44rem;
    }

    #header {
      height: 6.4rem;
    }

    .nav-list li {
      margin-left: 0;
      opacity: 0;
    }

    .mobile-menu {
      display: block;
    }

    .container-header #e {
      font-size: 3.2rem;
    }

    .container-header #formula {
      font-size: 2.8rem;
      padding: 10px;
    }

    .active {
      font-size: 1rem;
    }
  }

  .nav-list.active {
    transform: translateX(0);
    transition: transform 0.3s ease-in;
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .mobile-menu.active .line2 {
    opacity: 0;
  }

  .mobile-menu.active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  /*Adequação às telas do celular: tamanho 480px*/
  @media (max-width: 480px) {
    #logo {
      width: 4.8rem;
      height: auto;
    }

    #header {
      height: 4.8rem;
    }

    .navlink a {
      font-size: 1.08rem;
    }

    .nav-list {
      width: 70vw;
      top: 4.8rem;
    }

    .container-header #e {
      font-size: 2.4rem;
    }

    .container-header #formula {
      font-size: 2.1rem;
      padding: 10px;
    }

    .mobile-menu div {
      width: 24px;
      height: 1.5px;
      margin: 8px;
      background-color: #fff;
    }

    .logo-container {
      margin: 0;
      padding: 0;
    }
    
    .active {
      font-size: clamp(0.7rem, 0.8rem, 1.57rem);
    }
  }
`;
