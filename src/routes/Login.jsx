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
      alert("Usuário/senha inválidos");
    }
  };

  // Função de manipulação para cadastro de usuário
  const handleChangeCadastro = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  // useEffect para buscar os usuários na API
  useEffect(() => {
    if (isCadastro && id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => setNovoUsuario(data));
    } else {
      fetch("http://localhost:5000/usuarios/")
        .then((res) => res.json())
        .then((res) => {
          console.log("Usuários carregados:", res); // Verificação de debug
          setUsuarios(res);
        })
        .catch((err) => console.error("Erro ao carregar usuários:", err));
    }
  }, [id, isCadastro]);

  // Função de envio de cadastro de usuário
  const handleSubmitCadastro = (e) => {
    e.preventDefault();

    // Validação de campos vazios
    if (novoUsuario.usuario.trim() === "" || novoUsuario.senha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const usuarioExistente = usuarios.some(
      (user) => user.usuario.toLowerCase() === novoUsuario.usuario.toLowerCase()
    );

    if (usuarioExistente) {
      alert("Este nome de usuário já existe. Escolha outro.");
      return;
    }

    // Se todas as validações forem bem-sucedidas, continuar com o envio
    let metodo = id ? "put" : "post";

    fetch(`http://localhost:5000/usuarios/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    })
      .then(() => {
        alert("Cadastro realizado com sucesso !!!");
        // Limpar os campos após o sucesso do envio
        setNovoUsuario({
          usuario: "",
          senha: "",
        });

        navigate("/login");
        window.location.reload(); // Atualizar a página

        navigate("/login", { replace: true });
      })
      .catch((err) => console.error("Erro ao enviar cadastro:", err));
  };

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
            </div>

            <div className="second-column">
              <form className="login-form" onSubmit={handleSubmitLogin}>
                <span className="title title-second">Faça seu Login</span>
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
                <div className="form2">
                  <label className="label-input" htmlFor="usuario">
                    <i className="far fa-user icon-modify"></i>
                    <input
                      type="text"
                      className="input-form"
                      id="usuario"
                      ref={usuario}
                      placeholder="Usuário"
                    />
                  </label>

                  <label className="label-input" htmlFor="usuario">
                    <i className="fas fa-lock icon-modify"></i>
                    <input
                      type="password"
                      className="input-form"
                      id="senha"
                      ref={senha}
                      placeholder="Senha"
                    />
                  </label>
                </div>

                <div className="login-btn">
                  <button className="btn btn-second" type="submit">
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
                Para se conectar conosco
              </p>
              <p className="description description-primary">
                Cadastre-se aqui com suas informações
              </p>
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
                <ul className="utilidades">
                  <li>
                    <span className="text1">Já possui conta?</span>
                  </li>
                  <li>
                    <span onClick={toggleCadastro} className="link">
                      Clique aqui para entrar
                    </span>
                  </li>
                </ul>
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
                  <i className="far fa-user icon-modify"></i>
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
