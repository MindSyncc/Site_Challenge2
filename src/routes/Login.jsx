import React, { useState } from 'react';
import { LoginStyle } from "../css/LoginStyle";

function Login() {
  const [bodyClass, setBodyClass] = useState('');

  const handleSignIn = () => {
    setBodyClass('sign-in-js');
  };

  const handleSignUp = () => {
    setBodyClass('sign-up-js');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    window.location.href = 'index.html';
  };

  return (
    <LoginStyle>
    <div className={bodyClass}>

      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem-vindo!</h2>
            <p className="description description-primary">Para se manter conectado conosco</p>
            <p className="description description-primary">Faça login com suas informações pessoais</p>
            <button id="signin" className="btn btn-primary" onClick={handleSignIn}>Entrar</button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Criar conta</h2>
            <div className="social-media">
              {/* Redes sociais aqui */}
            </div>
            <p className="description description-second">ou utilize seu e-mail para cadastro:</p>
            <form className="form">
              <label className="label-input">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Nome" />
              </label>
              <label className="label-input">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>
              <label className="label-input">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Senha" />
              </label>
              <button className="btn btn-second">Cadastrar-se</button>
            </form>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Não tem cadastro?</h2>
            <p className="description description-primary">Introduza os seus dados pessoais</p>
            <p className="description description-primary">e faça login logo após</p>
            <button id="signup" className="btn btn-primary" onClick={handleSignUp}>Cadastrar</button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Faça o seu login</h2>
            <form className="form">
              <label className="label-input">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>
              <label className="label-input">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Senha" />
              </label>
              <a className="password" href="#">Esqueceu a senha?</a>
              <button className="btn btn-second" id="loginButton" onClick={handleLogin}>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </LoginStyle>
  );
}

export default Login;
