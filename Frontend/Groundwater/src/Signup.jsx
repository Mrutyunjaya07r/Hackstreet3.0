import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {
  let navigate=useNavigate()
  const [fullname,setFullname]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const postData=async()=>{
    let result=await fetch("http://localhost:3000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        fullname:fullname,
        username:username,
        password:password,
        email:email
      })
    })
    result=await result.json();
    console.log(result)
    alert(`${fullname} Signup sucessfully`)
    navigate('/signin')
  }

  return (
    <div className='page'>
      <h1 style={{textAlign:"center",color:"black"}}>SignUp</h1>
      <div className="container" >
        <div className="form">
          <input type="text" name="fullname" id="fullname" required value={fullname} onChange={(e)=>{setFullname(e.target.value)}} placeholder='Enter fullname' />
          <input type="text" name="username" id="username" required value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter username'  />
          <input type="email" name="email" id="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter email'  />
          <input type="password" name="password" id="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password'  />
          <input type="submit" value="submit" onClick={postData} style={{backgroundColor:"chartreuse",color:"black"}}  />
        </div>
      </div>
    </div>
    
  )
}

export default Signup