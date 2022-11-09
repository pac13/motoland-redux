import React from 'react';

const MotoCartItem = ({el, delOneFromCart, delAllFromCart}) => {
  let {id, content, name, price, quantity} = el;
  return (
    <li>
     <div>
       <h2>{name}</h2>
       <img src={content} alt={name} />
       <h2>${price} x {quantity} = ${price*quantity}</h2>
       <div>
         <button onClick={()=> delOneFromCart(id)}>Remove one</button>
         <button onClick={()=> delAllFromCart(id, true)}>Delete All</button> 
       </div>
     </div>
    </li>
  )
}

export default MotoCartItem;