import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/Actions";

const Carts = () => {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  return (
    <div>
      <h5>This is cart</h5>
      {carts.map((cart) => (
        <h5
          style={{
            marginLeft: "10px",
            backgroundColor: "gray",
            width: "300px",
          }}
        >
          {cart.name}

          <button onClick={() => dispatch(removeFromCart(cart.name))}>
            DELETE
          </button>
        </h5>
      ))}
    </div>
  );
};

export default Carts;
