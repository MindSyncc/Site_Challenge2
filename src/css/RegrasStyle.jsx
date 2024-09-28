import styled from "styled-components";

export const RegrasStyle = styled.section`
  .logo-container {
    background-color: black;
  }
  /* styles.css */
  body {
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    font-family: "Roboto Mono", monospace;
  }

  * {
    font-size: 2rem;
  }

 .regras-h1 {
    text-align: center;
    font-size: 3.5rem;
    padding-top: 10vh;
    padding-bottom: 5vh;
    
  }

  .botao-regras {
    background-color: #191830;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 20px 18px;
    cursor: pointer;
    border-radius: 20px;
    text-align:center;
}
    .button-container{
    text-align:center;
    }


.botao-regras:hover {
  background-color: #191815;
  
  
}

  h2 {
    color: #6b0b0b;
    margin-top: 20px;
    font-size: 2.5rem;
    text-align:center;
    padding-bottom:3vh;
  }

  h3 {
    color: #6b0b0b;
    padding-bottom:3vh;
  }

  p {
    color: #555;
    line-height: 1.6;
    font-size: 2rem;
    padding-bottom:3vh;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    color: #333;
  }

  ul li {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  section {
    background: #BDBDBD;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin:50px;
  }

  section:nth-child(even) {
    background: #eaeaea;
  }
`;
