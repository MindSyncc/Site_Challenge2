import styled from "styled-components";
import car from '../assets/img/home/carrousel/car.jpg'

export const HeaderStyle = styled.section`

.container-header{
  background: url(${car});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.container-header #formula{
  font-size: 3.5rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 100;
}

.container-header #e{
  font-size: 4rem;
  color: red;
  font-family: 'Roboto Mono', monospace;
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

.logo-container{
  background-color: #010F1C;
  color: white;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-family: 'Roboto Mono', monospace;
  font-style: italic;
  font-weight: 100;
  height: 80px;
}

.container-header a{
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

#login a{
  color: #17AA40;
}

.navlink a:hover{
  color: #E01600;
}

#login a:hover{
  color: #3cff00;
}
`