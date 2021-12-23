import React , { useReducer} from 'react'
import context from './context';
import { CartReducer } from "./Reducer";

const Withcontext = (props) => {

   let qty=1;
   const [state, dispatch] = useReducer(CartReducer,
      {cart:[],qty} )   
   
   const setTotal = (Total) => {
      return dispatch({
         type: "SETTOTAL",
         payload: Total,
      });
   };

   const setFlag = (Flag) => {
      return dispatch({
         type: "SETFLAG",
         payload: Flag,
      });
   };

   const setName = (Name) => {
      return dispatch({
         type: "SETNAME",
         payload: Name,
      });
   };
   
   return (
      <context.Provider value={{state , dispatch , setTotal , setName , setFlag }}>
         {props.children}
      </context.Provider>
   )
}

export default Withcontext;
