import React , { useContext , useState , useEffect } from 'react'
import { Link } from "react-router-dom";
import context from './context'
import {Navbar,Container, Nav, FormControl} from "react-bootstrap"

export default function Header() {
   const {state:{cart,search},dispatch,setSearch,setFlag} = useContext(context)
   const username=localStorage.getItem("name");
   console.log(username)
   return (
      <>
         <Navbar bg="dark" variant='dark'>
            <Container>
               <Navbar.Brand>
                  <Link to="/products" style={{textDecoration:'none',color:'white',textAlign:"left"}}>
                  Shopping cart
                  </Link>
               </Navbar.Brand>
               <Navbar.Brand>
                  <Link to="/products" style={{textDecoration:'none',color:'white',textAlign:"left"}}>
                    <span className='cart'>Products</span>
                  </Link>
                  <Link to="/cart" style={{textDecoration:'none',color:'white',textAlign:"left"}}>
                     Cart <span className="cart" style={{color:"red"}}>{cart.length}</span>
                  </Link>
                  Hello <span className='admin cart'>
                  {username.charAt(0).toUpperCase()+ username.slice(1)}
                  </span>
                  <button className='btn' onClick={()=>setFlag(0)}>
                  <Link to="/" className='fs-6' style={{textDecoration:'none',color:'white',textAlign:"left"}}>
                    Logout
                  </Link>
                  </button>
               </Navbar.Brand>
            </Container>
         </Navbar>
      </>
   )
}
