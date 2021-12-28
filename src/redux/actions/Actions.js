import { ActionsType } from "../types/types";

const addToCart = (name,price)=>{
    return {
        type:ActionsType.ADD_TO_CART,name,price
    }
}

const removeFromCart = (name)=>{
    return {
        type:ActionsType.REMOVE_FROM_CART,name
    }
}

export { addToCart, removeFromCart };

