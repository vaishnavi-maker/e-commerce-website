import React , { useState , useEffect , useContext  } from 'react'
import { Link , Navigate} from 'react-router-dom';
import context from './context'

export const LoginPage = () => {
   const {setFlag} = useContext(context)
   const [currUsername, setCurrUser] = useState("")
   const [currPassword, setCurrPassword] = useState("")
   const register_username=localStorage.getItem("username");
   const register_password=localStorage.getItem("password");
   const check=()=>{
      if(currUsername==="" || currPassword==="" ){
         alert("Plz fill in all Login Details")
      }
      else{
         if(register_username===currUsername && register_password===currPassword){
            // window.alert("login")
             let flag=1;
             setFlag(flag);
          }
         else{
            localStorage.setItem("flag","false")
            alert("Plz Enter valid Username and Password")
         } 
      }
   }
   return (
      <div>
      <h1 className='text-center check'>Login Form</h1>
      <form className='checkout login'>
         <div><label className='formlabel'>UserName </label></div>
         <div><input type="text" className="inputform" onChange={(e)=>setCurrUser(e.target.value)}></input></div>
         <div><label className='formlabel'>Password </label></div>
         <div><input type="password" className="inputform" onChange={(e)=>setCurrPassword(e.target.value)}></input></div>
         <br/>
         <div><button className='button2'
          onClick={(e)=>{
            e.preventDefault()
            check()
            //setFlag(1)
         }} >Login</button></div>
         <br/>
         <div><label className='formlabel register'>Don't have an account? <br/>
         <Link to="/register">Register</Link>
         </label></div>         
      </form>
   </div>   
   )
}
