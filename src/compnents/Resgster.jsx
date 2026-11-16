import React, { useState } from 'react'

const Resgster = ({setToggle}) => {

    const [formDate,setFormDate] = useState({});
    const [users, setusers] = useState([]);
    console.log(users);
    
    const handlechange =(e) =>{
        let {name,value} = e.target;
        setFormDate({...formDate,[name]:value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        setusers([...users,formDate])
        setFormDate({
            name:'',
            email:'',
            password:'',
        })
        
        
        

    }
  return (
    <div className='bg-white w-90 p-6 rounded-xl'>
        <h1 className='p-2'>register</h1>
      <form onSubmit={handlesubmit} className = ' flex flex-col gap-4'action="">
        <input 
        required
        value={formDate.name}
        name='name'
        onChange={handlechange}
         className = 'p-2 border border-gray-400 rounded-2xl'
        type="text" placeholder='name'/>
        <input 
        required
        value={formDate.email}
        name='email'
        onChange={handlechange}
         className = 'p-2 border border-gray-400 rounded-2xl'
        type="text" placeholder='email'/>
        <input
        required
        value={formDate.password}
        name='password'
        onChange={handlechange}
         className='p-2 border border-bs-green-400 rounded-2xl' type="password" placeholder='password' />
        <button className='bg-amber-50 p-2 border border-amber-50 rounded-3xl hover:bg-amber-950'>login</button>
      </form>
      <p className='p-4'>
        alerdy have a account? <span 
        onClick={() =>setToggle(prev => !prev)}
        className='text-blue-300'>login here</span>
      </p>
    </div>
  )
}

export default Resgster
