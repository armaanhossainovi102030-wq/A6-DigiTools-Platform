import React from 'react';

const Cart = ({Carts}) => {
    const totalPrice = Carts.reduce((Sum,ite)=> Sum + ite.price,0)
    return (
        <div className='border p-10'>
            <div className='mb-3'>
                <h2 className='text-2xl font-bold'>Your Cart</h2>
            </div>

            
                 {Carts.map(item =>
                <div >
                    <div className='p-5 shadow-sm  border-zinc-500 mb-5 bg-amber-50 flex justify-between items-center'>
                        <div>
                        <h2 className=' font-bold'>{item.name}</h2>
                        <p>${item.price}</p>
                    </div>
                    <div>
                          <button className="text-red-600">Remove</button>
                    </div>
                    </div>
                    
                </div>
            )
            }
            <div className='flex justify-between p-3'>
                        <p>Total</p>
                        <p>${totalPrice}</p>
                    </div>
                          <button className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl btn-block">Proceed To Checkout</button>

            
            
               
            
        </div>
    );
};

export default Cart;