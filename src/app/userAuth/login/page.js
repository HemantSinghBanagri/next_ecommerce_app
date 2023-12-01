"use client"
import React, { useState } from 'react'
import styles from "./page.module.scss"
import { useAuth } from '@/app/authcontext/page'

const Login = ({onLogin }) => {
  
  

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')



  const handleLogin=async()=>{
    
    try{
      
      const response=await fetch('https://654b27ca5b38a59f28ee9706.mockapi.io/users')
      const users=await response.json();
      


      const user=users.find(u=>u.email ===email  && u.password==password)
      
      if(user){
        onLogin(user)
        alert("Login sucessful")
      }else{
        setError('Invalid username or password')
      }

    }catch(error){
      console.error("Error during login",error)
      setError('An error orrured')

    }

    

  }
  return (
    <div>
    <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}  >
     login
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
    </div>
  )
}

export default Login