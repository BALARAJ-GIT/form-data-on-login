import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className='bg-white w-90 p-6 rounded-xl'>
        <h1 className='p-2'>login</h1>
      <form  className = ' flex flex-col gap-4'action="">
        <input  className = 'p-2 border border-gray-400 rounded-2xl'
        type="text" placeholder='email'/>
        <input className='p-2 border border-bs-green-400 rounded-2xl' type="text" placeholder='passward' />
        <button className='bg-amber-50 p-2 border border-amber-50 rounded-3xl hover:bg-amber-950'>login</button>
      </form>
      <p className='p-4'>
        didnt have a account? <span
        onClick={()=>{setToggle(prev =>!prev)}}
         className='text-blue-400'> register here</span>
      </p>
    </div>
  )
}

export default Login
