import React from 'react';
import { RiAddCircleLine } from "react-icons/ri";

const CrudTableRow = ({el, setDataToEdit, deleteData, addToCart}) => {
  let {id,
    content,
    name,
    price} = el;
  return (
    <li>
      <div>
        <h1>{name}</h1>
      </div>
      <button onClick={() => addToCart(id)} className='img'>
        <img src={content} alt={name} />
      </button>
      <button onClick={() => addToCart(id)} className='add'><RiAddCircleLine /></button>
      <h2>${price}</h2>
      <div>
          <button onClick={() => setDataToEdit(el)}>Edit</button>
          <button onClick={() => deleteData(id)}>Delete</button>
      </div>
    </li>
  )
}

export default CrudTableRow;