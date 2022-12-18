import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';

function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const  createUser  = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className="text-center text-3xl font-bold p-4'">
        Fire authentication
      </h1>
      <div>
        <h1 className='text-2x1 font-bold py-6'>
        Faça login em sua conta
        </h1>
      </div>
      <form>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>EmaillAddress</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white" >Sign Up</button>
      </form>
      <p className='py-2'>
        Já tem uma conta?{" "}
          <Link to='/' className='underline'>
            Entrar
          </Link>
        </p>
    </div>
  )
}

export default SignUp