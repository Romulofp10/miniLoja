import './App.css'
//2 reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//3 context
import { AuthProvider } from './components/context/AuthContext';

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user === undefined

  if(loadingUser){
    <p>Carregando Pagina...</p>
  }

  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
