import { MdCancel } from "react-icons/md";
import { useParams, Link,useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import ListarUsuarios from "./ListarUsuarios";


const Usuario=()=>{
    /*Hook-useParams- é utilizado para receber paramentros(codigo) pela rota */
    let {id} =useParams();

    /*Hook- useState- ele manipula o estado da variavel */
    const [usuarios,setUsuarios]=useState({
        id,
        usuario:'',
        senha:''
    });

    //Hook- useNavigate- redireciona para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    // (...)spreed- expande os valores antigos com o novo  isso sempre vai acontecer com array ou objeto
    // evento target- captura o que foi digitado em um campo
    //value{usuarios.usuario} vai la no banco(json) e tras o usuario
    //value{usuarios.senha} vai la no banco(json) e tras a senha
    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
    }

    //criando uma variavel method ara post edit
    let metodo ="post"
    if(id){
        metodo="put"
    }

    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //Previne qualquer alteração na pagina (ex. Load)
        e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${id ? id: ''}` ,{
        method:metodo,
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),    
        //promises
    }).then(()=>{
        //direciona para o componente
        navigate("/login");
    })
    };

    //Hook-useEffect 
    useEffect(()=>{
        if(id) {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsuarios(data);
        });
    }
     },[id])

    return (
        <section className="usuario">
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="usuario"
                    value={usuarios.usuario}
                    placeholder="Digite seu usuário"
                    /* O onChange é util em situações que é necessário reagir
                    em tempo real a cada alteração do input */
                    onChange={handleChange}   
                />

                <input
                    type="password"
                    name="senha"
                    value={usuarios.senha}
                    placeholder="Digite sua senha"
                    /* O onChange é util em situações que é necessário reagir
                    em tempo real a cada alteração do input */
                    onChange={handleChange}   
                />
             
                <button type="submit">Cadastrar</button>
                  
                <Link to="/login">
                    {/* Chamando o icone do react  */}
                    <MdCancel />
                </Link>

                {/*Chamando o componente listar usuarios */}
                <ListarUsuarios/>

            </form>

        </section>
    )
}
export default Usuario