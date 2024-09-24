import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Calendario from './routes/Calendario.jsx'
import Pilotos from './routes/Pilotos.jsx'
import Classificacao from './routes/Classificacao.jsx'
import Equipes from './routes/Equipes.jsx'
import Login from './routes/Login.jsx'
import Regras from './routes/Regras.jsx'
import Noticias from './routes/Noticias.jsx'

// Função que cria as rotas

const router = createBrowserRouter([
  {
    //Elementos Pai
    path: '/', element:<App/> ,
    errorElement:<Error/> ,

    //Elementos Filho
    children:[
      {path: '/', element: <Home/>} ,
      {path: '/home', element: <Home/>} ,
      {path: '/calendario', element: <Calendario/>} ,
      {path: '/pilotos', element: <Pilotos/>} ,
      {path: '/classificacao', element: <Classificacao/>} ,
      {path: '/equipes', element: <Equipes/>} ,
      {path: '/login', element: <Login/>} ,
      {path: '/regras', element: <Regras/>} ,
      {path: '/noticias', element: <Noticias/>} ,
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
