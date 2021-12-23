import React , { useState , useEffect , useContext  } from 'react'
import { Link , Navigate} from 'react-router-dom';
import { Products } from './Products';
import Navbar from './Header';
import context from './context'
import { LoginPage } from './LoginPage';

export const Login = () => {
   const {state,dispatch} = useContext(context)

   console.log(state.flag)
   
   return state.flag!==1?(
      <div>
         <LoginPage/>
      </div>   
   ):
   (<Products/>);
}


export default Login;