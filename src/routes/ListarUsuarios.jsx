import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import {FaEdit, FaTrash} from 'react-icons/fa'


const ListarUsuarios=()=>{

    //Hook- useState
    const [usuarios, setUsuarios] = useState([]);


    //criando a função handleDelete

    const handleDelete =(id)=>{
        fetch(`http://localhost:5000/usuarios/${id}`,{
            method:'delete',
        })
        .then(()=>{
            window.location = "/listarUsuarios";
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    //Hook-useEffect- vai trazer os dados do usuario

    useEffect(()=>{
        fetch('http://localhost:5000/usuarios/')
            .then((res)=>{
            return res.json();
        })
            .then((res)=>{
            setUsuarios(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        //retorna um array vazio
    }, [])



    return(
        <section className="listarUsuario">
            <h2>Listar Usuários Cadastrados</h2>
            <Link to="/usuario">Cadastrar Novo Usuário</Link>
            <Link to="/login">Voltar</Link>
            <table>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Senha</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.usuario}</td>
                            <td>{item.senha}</td>
                            <td></td>
                            <td>
                                <Link to={`/editarUsuario/${item.id}`}>
                                    <FaEdit/>
                                </Link>
                                <button onClick={handleDelete.bind(this,item.id)}>
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
export default ListarUsuarios