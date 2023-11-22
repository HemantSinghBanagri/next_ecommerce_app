"use client"

import React, { useState } from 'react'


const Signup = ({onSignup}) => {

    const [username,setUsername]=useState('');
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [profilepic,setProfilePic]=useState('');
    const [error,setError]=useState('');



    const handleSignup=async()=>{
        try{
            const response=await fetch('https://654b27ca5b38a59f28ee9706.mockapi.io/users')
            const users=await response.json()



            const existingUser=users.find(u=>u.username===username || u.email===email)
            if(existingUser){
                setError('username or email already exists')
            }else{
                const newUser={
                    username,
                    fullname,
                    email,
                    password,
                    profilepic,
                    id:(users.length+1).toString(),
                    

                }
                alert("SignUP sucessfully")


                const addUserResponse =await fetch('https://654b27ca5b38a59f28ee9706.mockapi.io/users',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(newUser)

                });
                if(!addUserResponse.ok){
                    throw new Error('failed to create a new user')
                }
                onSignup(newUser)
            }
            
        }
        catch(error){
            console.log('error during signup',error)
            setError("An errror occored")
        }
    }



  return (
    <div>
    <h2>
        SignUp
    </h2>
    <div>
        <label htmlFor='username'>Username:</label>
        <input
            type='text'
            id="username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor='fullname'>FullName:</label>
        <input 
            type='text'
            id='fullname'
            value={fullname}
            onChange={e=>setFullname(e.target.value)}
        />

    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
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
      <div>
        <label htmlFor="profilepic">Profile Picture URL:</label>
        <input
          type="text"
          id="profilepic"
          value={profilepic}
          onChange={e => setProfilePic(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>

      
  
  )
}

export default Signup
