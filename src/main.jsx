import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Calendario from './routes/Calendario.jsx'
import Equipes from './routes/Equipes.jsx'
import Login from './routes/Login.jsx'
import Pilotos from './routes/Pilotos.jsx'
import Regras from './routes/Regras.jsx'

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
      {path: '/equipes', element: <Equipes/>} ,
      {path: '/login', element: <Login/>} ,
      {path: '/pilotos', element: <Pilotos/>} ,
      {path: '/regras', element: <Regras/>} ,
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
