import React , { useState , useEffect , useContext  } from 'react'
import { useParams } from 'react-router-dom'
import  ReactStars from "react-rating-stars-component";
import context from './context'
import Header from './Header';

function ProductDetail() {

   const {state:{cart},dispatch} = useContext(context)
   // access the parameters of the current route
   let {id}=useParams();
   let [fetchedData, updateFetchedData] = useState([]);
   let api = `https://fakestoreapi.com/products/${id}`;
   //console.log(fetchedData);

   const context1 = useContext(context)

   const ratingChanged = (newRating) => {
      console.log(newRating);
    };

   useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
        console.log(data);
      })();
    }, [api]);
    console.log("cart ",cart)
    let { category,description,image,price,rating,title } = fetchedData;

   return (
      <>
      <Header/>
      <div className="app">
         <div className="details">
            <div className="big-img">
               <img src={image} alt="" />
            </div>
            <div className="box">
               <div className="row">
                  <h2>{title}</h2>
                  <span>${price}</span>
               </div>
               <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  //value={rating?.rate}
                  size={24}
                  activeColor="#ffd700"
               />
            
               <p>{description}{/*rating?.rate*/}</p>
               <p>{category}</p>

               {
                        cart.some((c)=>c.id===id)?
                        <button className="btn btn1" onClick={
                           (e)=>{
                              e.preventDefault()
                              dispatch({
                                 type:"REMOVE_FROM_CART",
                                 payload:fetchedData
                              })
                           }
                        }>Remove From Cart</button>:
                        <button className="btn btn1" onClick={
                           (e)=>{
                              e.preventDefault()
                              dispatch({
                                 type:"ADD_TO_CART",
                                 payload:fetchedData
                              })
                           }
                        }>Add to cart</button>
                     }
            </div>
         </div>   
      </div>
      </>
   )
}

export default ProductDetail
