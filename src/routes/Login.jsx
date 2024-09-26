import React, { useState } from "react";
import { LoginStyle } from "../css/LoginStyle";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de login aqui
    console.log("Login com:", { email, password });
    // Redirecionar ou realizar ação após login
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Lógica de cadastro aqui
    console.log("Cadastro com:", { name, email, password });
    // Redirecionar ou realizar ação após cadastro
  };

  return (
    <LoginStyle>
      <div className="container">
        <div class="content first-content">
          {isSignIn ? (
            <div>
                      <div class="first-column">
            <h2 class="title title-primary">Bem-vindo!</h2>
            <p class="description description-primary">Para se manter conectado conosco</p>
            <p class="description description-primary">Faça login com suas informações pessoais</p>
            <button id="signin" class="btn btn-primary">Entrar</button>
        </div>   
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Entrar</button>
              </form>
              <p>
                Não tem uma conta?{" "}
                <button onClick={() => setIsSignIn(false)}>Cadastrar</button>
              </p>
            </div>
          ) : (
            <div>
              <h2>Criar conta</h2>
              <form onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Cadastrar-se</button>
              </form>
              <p>
                Já tem uma conta?{" "}
                <button onClick={() => setIsSignIn(true)}>Entrar</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </LoginStyle>
  );
}

export default Login;
