import React , { useState , useEffect , useContext } from 'react'
import { Link, Navigate } from 'react-router-dom';
import context from './context'
import Login from './Login';
import { LoginPage } from './LoginPage';

export const Register = () => {
   
   const {state,dispatch,setName,setRegister} = useContext(context)
   const [Username, setUsername] = useState("")
   const [Password, setPassword] = useState("")
   const [Address, setAddress] = useState("")
   const [MobileNo, setMobileNo] = useState("")
   const [Email, setEmail] = useState("")
   const {setFlag} = useContext(context)
   console.log(state.succ)
   if(state.succ==1){
      <LoginPage/>
   }
   const check=()=>{
      if(Username==="" || Password==="" || Address==="" || MobileNo==="" || Email==="")
      {
         alert("Plz fill in all Registration Details")
      }
      else{
        return <>

            { 
               alert("Register successfully")
               
            }
            
            {
               setRegister(1)
               
            }
            <Navigate to="/loginpage"/>
         </>
      }
   }
   //const [Name, setName1] = useState("")
   localStorage.setItem("username",Username)
   localStorage.setItem("password",Password)
   localStorage.setItem("name",Username)

   const data=localStorage.getItem("username");
   console.log(data)
   return (
      <div>
         <h1 className='text-center check'>Register Form</h1>
         <form className='checkout reg'>
            <div><label className='formlabel'>UserName </label></div>
            <div><input type="text" className="inputform" onChange={(e)=>{
               setUsername(e.target.value)
               setName(e.target.value)}}></input></div>
            <div><label className='formlabel'>Address </label></div>
            <div><input type="text" className="inputform" onChange={(e)=>setAddress(e.target.value)}></input></div>
            <div><label className='formlabel'>Mobile No. </label></div>
            <div><input type="text" className="inputform" onChange={(e)=>setMobileNo(e.target.value)}></input></div>
            <div><label className='formlabel'>Email</label></div>
            <div><input type="text" className="inputform" onChange={(e)=>setEmail(e.target.value)}></input></div>
            <div><label className='formlabel'>Password </label></div>
            <div><input type="password" className="inputform" onChange={(e)=>setPassword(e.target.value)}></input></div>
            <br/>
            <div>
               <button className='button2' onClick={(e)=>{
               e.preventDefault() 
               check()
               }} >
                  Register
              {/* <Link to="/">Register</Link>*/}
            </button></div>
            <br/>
            <div><label className='formlabel register'>Do you have an account? <br/>
            <Link to="/">Login</Link>
            </label></div>         
         </form>
      </div>
   )
}

export default Register;