import React, { useState } from 'react'
import './RandomPassword.css'
import '../App.css'

const RandomPassword = () => {
  const [password,setPassword] = useState("*************");
  const handlePassword =() =>{
    const randomPass = Math.random().toString(36).slice(2)+"@"+Math.random().toString(36).slice(2);
    setPassword(randomPass)
  }
  return (
    <div className='Main'>
    <h2>These are some Randome Password</h2>
    <p className='pass'>{password}</p>
    <button onClick={handlePassword}>Change</button>
    
  </div>
  )
}

export default RandomPassword