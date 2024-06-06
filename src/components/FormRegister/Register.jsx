import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser, error: authError , loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user={
      displayName,
      email,
      password,
    }

    if(password !==confirmpassword && password.length >= 6)
    {
      setError("As senhas precisam ser iguais!")
      return ;
    }
    console.log(user);

      const res = await createUser(user);
  
      console.log(res);
  };

  useEffect(()=>{

    if(authError){
      setError(authError);
    }

  },[authError]);



  return (
    <div className={styles.register}>
      <h2>Venha fazer parte desse E-commerce</h2>
      <p>Crie seu usuario e venda suas roupas!</p>
      <form onSubmit={handleSubmit}>
        <h3>Cadastre-se!</h3>
        <label >
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuario' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label >
          <span>E-mail:</span>
          <input type="Email" name='email' required placeholder='Email do usuario' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Insira a senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Confirmacao de Senha:</span>
          <input type="password" name='confirmpassword' required placeholder='Insira novamente sua senha' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Register