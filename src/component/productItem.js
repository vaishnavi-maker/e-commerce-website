import React , { useState , useEffect , useContext }from 'react'
import { Link } from 'react-router-dom';
import context from './context'

export const ProductItem = ({fetchedData}) => {
   const {state:{cart},dispatch} = useContext(context)
   let display;     
   if(fetchedData){
      display = fetchedData.map((x) => {
         //destructure the content
         let { category,description,id,image,price,rating,title } = x;
           return (
            <div className='app'>
            <Link 
               to={`${id}`} 
               key={id} 
               style={{textDecoration:'none',color:'black',textAlign:"left"}} 
               className="col-2" >
               <div className="details">
                  <div className="big-img1">
                     <img src={image} alt="" />
                  </div>
                  <div className="box">
                     <div className="row">
                        <div className='fs-5 '>{title}</div>
                        <span>${price}</span>
                        {/*console.log(fetchedData)*/}
                     </div>
                     {
                        cart.some((c)=>c.id===id)?
                        <button className="btn btn1" onClick={
                           (e)=>{
                              e.preventDefault()
                              dispatch({
                                 type:"REMOVE_FROM_CART",
                                 payload:x
                              })
                           }
                        }>Remove From Cart</button>:
                        <button className="btn btn1" onClick={
                           (e)=>{
                              e.preventDefault()
                              dispatch({
                                 type:"ADD_TO_CART",
                                 payload:x
                              })
                           }
                        }>Add to cart</button>
                     }
                  </div>
               </div>
            </Link>
            </div>
         );
       });
   }
   else{
      display="product not found";
   }
   

   return (
      <>
         {
            display
         }
      </>
   )
}

export default ProductItem;