import React from 'react'
import { addToCart, clearCart, delFromCart } from '../actions/shoppingActions';
import CrudTableRow from './CrudTableRow'
import MotoCartItem from './MotoCartItem';

const CrudTable = ({data, setDataToEdit, deleteData, dispatch, cart}) => {

  return (
    
    <div>
        <ul>
            <div className='motos'>
                {data.length > 0 ? (
                    data.map((el) =>(
                    <CrudTableRow
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    addToCart= {() => dispatch(addToCart(el.id))} />
                    ))
                ):(
                    <div>
                        <h2 colSpan='3'>No data</h2>
                    </div>
                )}
            </div>
        </ul>
        <div className='cart'>
            <div>
                {cart.length === 0 ?(
                    null
                ):(
                    <button onClick= {() => dispatch(clearCart())} >Clear cart</button>
                )}
            </div>
            <ul className='motos'>
                {cart.map((el, index) => (
                    <MotoCartItem
                        key={index}
                        el={el}
                        delOneFromCart={() => dispatch(delFromCart(el.id))}
                        delAllFromCart={() => dispatch(delFromCart(el.id, true))}/>
                    ))}
                
            </ul>
        </div>
    </div>
  )
}

export default CrudTable;