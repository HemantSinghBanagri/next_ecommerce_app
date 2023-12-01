"use client";

import React, { useEffect, useState } from 'react';
import Login from './login/page';
import Signup from './signup/page';
import styles from "./page.module.scss"
import { useAuth } from '../authcontext/page';

const UserAuth = () => {
  const {login,logout}=useAuth()
  const [loggedInUser, setLoggedInUser] = useState(()=>{
    const storedUser = localStorage.getItem('loggedInUser')
    return storedUser ?  JSON.parse(storedUser):null
  });
  

  const handleLogin = user => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    console.log('user log in ',user)
    
    
    console.log(localStorage)
   
   
  };

  const handleSignup = user => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    console.log("user sign in ",user)
  

  };

  

  const handleLogout=()=>{
    setLoggedInUser(null)
    localStorage.removeItem('loggedInUser')
    logout()
    alert("logout sucessfully")
  }

  useEffect(()=>{
    const storedUser=localStorage.getItem('loggedInUser')
    if(storedUser){
      setLoggedInUser(JSON.parse(storedUser))
    }
    console.log('component mounrted')
    return ()=>{
      console.log('component unmounted')
       localStorage.removeItem("loggedInUser")
      console.log('local storage celered')
    }
  },[])

  console.log("render with loggedin user ",loggedInUser)
  
 

  return (
    <div>
      {loggedInUser ? (
        
        <div className={styles.dropdownContainer}>
          <h2 >Welcome, {loggedInUser.username}</h2>
          <div >
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          
          <Signup onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default UserAuth;