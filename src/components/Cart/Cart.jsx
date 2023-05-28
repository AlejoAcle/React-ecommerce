import React from "react";
import { useState } from "react";

export const Cart = () => {

    const [cart,setCart] = useState(0)
    console.log(cart)

  return (
    <div>
      <button onClick={() => setCart(cart +1)}>
        <img
          alt=""
          src="../../../images/cart.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
      </button>
    </div>
  );
};
