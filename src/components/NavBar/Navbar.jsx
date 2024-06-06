import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.brand}>Mini<span>Loja</span></Link>
      <ul className={styles.links_list}>
        <li>
          <Link to='/'>Sobre</Link>
        </li>
        <li>
          <Link to='/Contact'>Entrar</Link>
        </li>
        <li>
          <Link to='/Register'>Cadastre-se</Link>
        </li>
        <li>
          <Link to='/about' >Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar