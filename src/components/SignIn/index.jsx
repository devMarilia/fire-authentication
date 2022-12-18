import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className="text-center text-3xl font-bold p-4'">
        Fire authentication
      </h1>
    <div>
      <h1 className='text-2x1 font-bold py-2'>
      Faça login em sua conta
      </h1>
    </div> 
    <form>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Email Address</label>
        <input className='border p-3' type="email" />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Password</label>
        <input className='border p-3' type="password" />
      </div>
      <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white" >Sign Up</button>
    </form>
    <p className='py-2'>
      Ainda não tem uma conta? {" "}
      <Link to='/signup' className='underline'>
        Cadastrar
      </Link>
    </p>
  </div>
  )
}

export default SignIn