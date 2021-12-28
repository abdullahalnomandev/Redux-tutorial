import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/Actions';

const Products = () => {

  const products=useSelector((state)=>state.cart.products)
  const disPatch= useDispatch()

    return (
        <div >
            {
                products.map((pd) => (
                    <div key={pd.id} style={{border:"1px solid gray",padding:'20px',borderRadius:'10px',width:'500px',margin:'20px',cursor:'pointer'}}>
                        <h5>{pd.name}</h5>    
                        <p>Price:{pd.price}</p>
                        <button onClick={()=>disPatch(addToCart(pd.name,pd.price))}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;