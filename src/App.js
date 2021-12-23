import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import './component/style.css';
import Withcontext from './component/withcontext';
import { BrowserRouter , Navigate, Route , Routes } from "react-router-dom";
import Login  from './component/Login';
import { Products } from './component/Products';
import Cart from './component/Cart';
import ProductDetail from './component/ProductDetail';
import Checkoutform from './component/checkoutform';
import { Register } from './component/register';
import { LoginPage } from './component/LoginPage';

const App = () => {
  const flag=localStorage.getItem("flag");
  
  console.log(flag)
  let display;
  if(flag==="true"){
    display =  ""
  }
  else{
    display = "incorrect data";
  }
    
  return (
    <BrowserRouter>
      <Withcontext>
      <Routes>
        {/*<Route exact path="/" element={<Products/>}/>*/}
        {<Route exact path="/" element={<Login/>}/>}
        <Route  path="/login" element={<Login/>}/>

        <Route  path="/loginpage" element={<LoginPage/>}/>

        <Route path="/register" element={<Register/>}/>

        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>

        <Route exact path="/cart" element={<Cart/>}/>
        <Route path="/cart/:id" element={<ProductDetail/>}/>

        <Route path="/checkoutform" element={<Checkoutform/>}/>

      </Routes>
      </Withcontext>  
    </BrowserRouter>
  )
}

export default App;