import { useState } from "react"
import { hundleLogin } from "../../data/server"
import "./login.css"
import { TextField } from "@mui/material"
import BusinessData from "../businessData/BusinessData"



function Login() {
  const[name,setName]=useState('')
  const[password,setPassword]=useState('')
  

    return (
      <>
      <BusinessData admin={false}></BusinessData>
      <div className="login">
        <TextField className="input-login" type='text' label="שם משתמש" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}></TextField>
        <br/>
        <br/>
        <TextField className="input-login" type='password' label="סיסמה" variant="outlined" value={password}  onChange={(e)=>setPassword(e.target.value)}></TextField>
        <br/>
        <br/>
        <button onClick={() => {hundleLogin(name, password)
        setName('');
        setPassword('')
        }}>התחברות</button>
        </div>
        
      </>
    )
  }
  
  export default Login
