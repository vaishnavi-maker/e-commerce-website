export const CartReducer=(state,action)=>{

   switch (action.type) {
      case "ADD_TO_CART":
         return {...state,cart:[...state.cart,{...action.payload,qty:1}]};
      case "REMOVE_FROM_CART":
         return {...state,cart:state.cart.filter(c=>c.id !== action.payload.id)};
      case "CHANGE_CART_QTY":
         return {
            ...state,
            cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty,
            ),
         };
      case "SETTOTAL":
        return {
          ...state,
          total:action.payload
        };
      case "SETNAME":
        return {
          ...state,
          name:action.payload
        };
      case "SETREGISTER":
        return {
          ...state,
          succ:action.payload
        };
      case "SETFLAG":
        return {
          ...state,
          flag:action.payload
        };  
      default:
         return state;
   }
}

