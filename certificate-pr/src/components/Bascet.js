import React from 'react'
import { useCart } from 'react-use-cart'
const Bascet = () => {
    const {isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart}=useCart()
        if(isEmpty) return <h1 className='text-center'>Your Basket is Empty</h1>
            
  return (
    <div className='container bascet-card'>
            <h2 className='text-center'>Total Price: ${cartTotal}</h2>
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <h5 className='text-center'>Cart({totalUniqueItems}) total Items:({totalItems})</h5>
                    
                        
                            {items.map((product,index)=>{
                                return(
                                    <div className='col-2 card' key={index}>
                                        <div className='img-area'><img src={product.img1} style={{height:"6rem"}} alt="" /></div>
                                        <div className='text-center'>{product.about}</div>
                                        <div className='text-center'>{product.price}$</div>
                                        <div className='quantity'>Quantity: ({product.quantity})</div>
                                        <div className='update'>
                                        <button className='btn btn-danger ms-2' onClick={()=>updateItemQuantity(product.id, product.quantity -1)}>-</button>
                                        <button className='btn btn-success ms-2' onClick={()=>updateItemQuantity(product.id, product.quantity +1)}>+</button>
                                        </div>
                                    </div>
                                )
                            })}
                        
                    
                </div>
                <div className="mt-3 col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                    <button className='btn btn-danger' onClick={()=>{emptyCart()}}>Clear Cart</button>
                    <button className='btn btn-success ms-5'>Buy Now</button>
                </div>
            </div>
        </div>

  </div>
  )
}

export default Bascet