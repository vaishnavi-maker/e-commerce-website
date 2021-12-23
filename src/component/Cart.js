import React , { useContext , useEffect, useState } from 'react'
import context from './context'
import { Link } from 'react-router-dom';
import Header from './Header';

export const Cart = () => {
   
   const {state:{cart},dispatch,setTotal} = useContext(context)
   const [Total, setTotal1] = useState()
   
   useEffect(() => {
      setTotal1(cart.reduce((acc,curr)=>acc+(curr.price)*curr.qty,0))
   }, [cart])

   return (
      <>
      <Header/>
      <div className='app'>
         <>
         {
            cart.map((x)=>{
               let { category,description,id,image,price,rating,title } = x;
               return (
               <Link
               to={`${id}`} 
               key={id} 
               style={{textDecoration:'none',color:'black',textAlign:"left"}} 
               className="col-4 mb-2 " >
               <div className="details">
                  <div className="big-img1">
                     <img src={image} alt="" />
                  </div>
                  <div className="box">
                     <div className="row">
                        <div className='fs-5'>{title}</div>
                        <span>${price}</span>
                        <span>
                        Qty : 
                        {
                           cart.map((c)=>{
                              return (
                              <>
                                 {c.id===id ? " "+c.qty : ""}
                              </>
                              )
                           })
                        }
                        </span>
                        <span>
                        price : 
                        {
                           cart.map((c)=>{
                              return (
                              <>
                                 {c.id===id ? " "+c.price*c.qty : ""}
                              </>   
                              )
                           })
                        }
                        </span>
                        <select
                           onClick={(e) =>{
                              e.preventDefault()
                              dispatch({
                                 type: "CHANGE_CART_QTY",
                                 payload: {
                                 id: id,
                                 qty: e.target.value,
                                 },
                              })
                           }
                              
                           }
                        >
                           <option selected>{1}</option>
                           {[...Array(5).keys()].map((x) => (
                              <option key={x + 1}>{x + 1}</option>
                           ))}
                        </select>
                     </div>
                     <button className="btn btn1" onClick={
                        (e)=>{
                           e.preventDefault()
                           dispatch({
                              type:"REMOVE_FROM_CART",
                              payload:x
                           })
                        }
                     }>Remove From Cart</button>
                  </div>
               </div>
            </Link>)
            })
         }
         </>
         <br/>
         <br/><br/>
         <div className='total fw-bold'>
            <div className=''>
               Total
            </div>
            <div className=''>
               $ {Total} <br/>
            </div>
         </div>
         <div className='cartbutton fw-bold'>
               <br/>
               <button className='btn conti_btn'><Link to="/products" style={{textDecoration:'none',color:'white'}}>Continue Shopping</Link></button>
               <button className='btn checkout_btn' 
               onClick={(e) =>{
                     e.preventDefault()
                     setTotal(Total)
                  }
                     
               }
               ><Link to="/checkoutform" style={{textDecoration:'none',color:'white'}}>
                  Checkout
                 </Link>
                  
               </button>
         </div>
      </div>
      </>
   )
}

export default Cart;