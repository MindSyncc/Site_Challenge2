import { useRef, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { LoginStyle } from "../css/LoginStyle";
import ListarUsuarios from "./ListarUsuarios";

const Login = () => {
  // Referências e estados para login
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Estado para diferenciar entre login e cadastro de usuário
  const [isCadastro, setIsCadastro] = useState(false);

  // Parâmetro de rota (para editar usuário no cadastro)
  let { id } = useParams();
  const [novoUsuario, setNovoUsuario] = useState({
    id,
    usuario: "",
    senha: "",
  });

  // Função de validação para login
  function validade() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
    return false;
  }

  // Função de envio de login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("usuario", usuario.current.value);
      sessionStorage.setItem("senha", token);
      navigate("/jogo");
    } else {
      alert("usuario/senha inválidos");
    }
  };

  // Função de manipulação para cadastro de usuário
  const handleChangeCadastro = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  // Função de envio de cadastro de usuário
  const handleSubmitCadastro = (e) => {
    e.preventDefault();
    let metodo = id ? "put" : "post";

    fetch(`http://localhost:5000/usuarios/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    }).then(() => {
      navigate("/login");
    });
  };

  // useEffect para buscar usuários na API (para login e edição de usuários)
  useEffect(() => {
    if (isCadastro && id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => setNovoUsuario(data));
    } else {
      fetch("http://localhost:5000/usuarios/")
        .then((res) => res.json())
        .then((res) => setUsuarios(res));
    }
  }, [id, isCadastro]);

  // Alternar entre login e cadastro
  const toggleCadastro = () => {
    setIsCadastro(!isCadastro);
  };

  return (
    <LoginStyle>
      {!isCadastro ? (
        // Formulário de Login
        <section className="container">
          <div className="content first-content">
            <div className="first-column">
              <h2 className="title title-primary">Bem-vindo!</h2>
              <p className="description description-primary">
                Para se manter conectado conosco
              </p>
              <p className="description description-primary">
                Faça login com suas informações pessoais
              </p>
              <button className="btn btn-second" id="loginButton">
                Entrar
              </button>
              <p className="description description-primary">
                Não possui conta? Clique aqui para se cadastrar.
              </p>

              <button
                id="signin"
                className="btn btn-primary"
                onClick={toggleCadastro}
              >
                Cadastrar
              </button>
            </div>

            <div class="second-column">
              <form className="login-form" onSubmit={handleSubmitLogin}>
                <span className="titulo-login">Faça seu Login</span>

                <div className="w-input">
                  <input
                    type="text"
                    className="input-form"
                    id="usuario"
                    ref={usuario}
                    placeholder="Usuário"
                  />
                </div>

                <div className="w-input">
                  <input
                    type="password"
                    className="input-form"
                    id="senha"
                    ref={senha}
                    placeholder="Senha"
                  />
                </div>

                <div className="login-btn">
                  <button className="login-form-btn" type="submit">
                    Login
                  </button>
                </div>

                <ul className="utilidades">
                  <li>
                    <span className="text1">Esqueceu sua senha?</span>
                  </li>
                  <li>
                    <span className="text1">Não possui conta?</span>
                    <span onClick={toggleCadastro} className="link">
                      Criar conta
                    </span>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section>
      ) : (
        // Formulário de Cadastro com o HTML fornecido
        <div className="container">
          <div className="content first-content">
            <div className="first-column">
              <h2 className="title title-primary">Bem-vindo!</h2>
              <p className="description description-primary">
                Para se manter conectado conosco
              </p>
              <p className="description description-primary">
                Faça login com suas informações pessoais
              </p>
              <button
                id="signin"
                className="btn btn-primary"
                onClick={toggleCadastro}
              >
                Entrar
              </button>
            </div>
            <div className="second-column">
              <h2 className="title title-second">Criar conta</h2>
              <div className="social-media">
                <ul className="list-social-media">
                  <a className="link-social-media" href="#">
                    <li className="item-social-media facebook">
                      <i className="fab fa-facebook-f"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-google-plus-g"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-linkedin-in"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <p className="description description-second">
                ou utilize seu e-mail para cadastro:
              </p>
              <form className="form" onSubmit={handleSubmitCadastro}>
                <label className="label-input" htmlFor="usuario">
                  <i className="far fa-user icon-modify"></i>
                  <input
                    type="text"
                    name="usuario"
                    placeholder="Nome"
                    value={novoUsuario.usuario}
                    onChange={handleChangeCadastro}
                  />
                </label>

                <label className="label-input" htmlFor="senha">
                  <i className="fas fa-lock icon-modify"></i>
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={novoUsuario.senha}
                    onChange={handleChangeCadastro}
                  />
                </label>

                <button className="btn btn-second" type="submit">
                  Cadastrar-se
                </button>
              </form>
            </div>
          </div>

          <div className="content second-content">
            <div className="first-column">
              <h2 className="title title-primary">Não tem cadastro?</h2>
              <p className="description description-primary">
                Introduza os seus dados pessoais
              </p>
              <p className="description description-primary">
                e faça login logo após
              </p>
              <button
                id="signup"
                className="btn btn-primary"
                onClick={toggleCadastro}
              >
                Cadastrar
              </button>
            </div>
            <div className="second-column">
              <h2 className="title title-second">Faça o seu login</h2>
              <div className="social-media">
                <ul className="list-social-media">
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-facebook-f"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-google-plus-g"></i>
                    </li>
                  </a>
                  <a className="link-social-media" href="#">
                    <li className="item-social-media">
                      <i className="fab fa-linkedin-in"></i>
                    </li>
                  </a>
                </ul>
              </div>
              <p className="description description-second">
                ou use sua conta de e-mail:
              </p>
              <form className="form" onSubmit={handleSubmitLogin}>
                <label className="label-input" htmlFor="email">
                  <i className="far fa-envelope icon-modify"></i>
                  <input type="email" placeholder="Email" ref={usuario} />
                </label>

                <label className="label-input" htmlFor="senha">
                  <i className="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder="Password" ref={senha} />
                </label>

                <a className="password" href="#">
                  Esqueceu a senha?
                </a>
                <button className="btn btn-second" id="loginButton">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </LoginStyle>
  );
};

export default Login;
