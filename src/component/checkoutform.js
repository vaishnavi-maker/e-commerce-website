import React , { useContext , useEffect, useState } from 'react'
import context from './context'
import Header from './Header';

export const Checkoutform = () => {
   const {state,dispatch} = useContext(context)
   const check=()=>{
      if (window.confirm('Order Successfully Placed'))
      {
         window.location.href="products"
      }
   }

   return (
      <div>
         <Header/>
         <h1 className='text-center check'>CheckOut Form</h1>
         <form className='checkout'>
            <div><label className='formlabel'>Email </label></div>
            <div><input type="text" className="inputform"></input></div>
            <div><label className='formlabel'>Name </label></div>
            <div><input type="text" className="inputform"></input></div>
            <div><label className='formlabel'>Address </label></div>
            <div><input type="text" className="inputform"></input></div>
            <div><label className='formlabel'>Payment ( {state.total} )</label></div>
            <div>
               <select>
                  <option>Cash on Delivery</option>
                  <option>Online payment</option>
               </select>
            </div><br/>
            <div><button className='button2' onClick={(e)=>
               {
                  e.preventDefault()
                  check()
                  //alert("Order Successfully Placed")
               }
            } >Place Order</button></div>
         </form>
      </div>
   )
}

export default Checkoutform;