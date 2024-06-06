import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Configuracao router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//context
import {AuthProvider} from "./components/context/AuthContext.jsx"

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Login from './pages/Login/Login.jsx';
import Register from './components/FormRegister/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: '/Login',
      element: <Login/>
    },
    {
      path: '/Register',
      element: <Register/>
    },
  ]
  },
  
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
