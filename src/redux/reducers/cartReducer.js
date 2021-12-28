import { ActionsType } from "../types/types";

const initialState={
    products:[ 
    {id:1,name:'TV',price:50},
    {id:2,name:'FRIZE',price:70},
    {id:3,name:'MOBILE',price:90},
    {id:4,name:'LAPTOP',price:760},
    {id:5,name:'MACHINE',price:590}
],
    carts:[]
}

export const cartReducer = (state=initialState, action) => {

  switch (action.type) {
    case ActionsType.ADD_TO_CART: {
        const name= action.name;
        const price =action.price;
      return {
          ...state,carts:[...state.carts,{name,price}]
      };
    }

    case ActionsType.REMOVE_FROM_CART:{
        const name=action.name
        const newCart= state.carts.filter(pd => pd.name !== name)
        console.log("name",name);
        console.log("newCart",newCart);

        return{
            ...state,carts:newCart
        }
    }

    default:
      return state;
  }
};
