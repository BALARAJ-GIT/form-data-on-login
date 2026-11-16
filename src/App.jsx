import React, { useState } from 'react'
import Login from './compnents/login'
import Resgster from './compnents/Resgster'

const App = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='bg-gray-200 h h-screen flex justify-center items-center'>
      
      {
        toggle ? <Login setToggle = {setToggle} /> : <Resgster setToggle = {setToggle} />
         
      }
    </div>
  )
}

export default App
