import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CardMain = ({CardInfo,Carts,setCarts}) => {
      const [BuyNow, setBuyNow] = useState(false)

  
      const handleBuyNow = ()=>{
        setBuyNow(true)

        const isFound = Carts.find(item => item.id === CardInfo.id)
        if(isFound){
          toast.error("Already taken in cart")
          return;
        }
        setCarts([...Carts,CardInfo])
        toast.success(" added to cart sucessfully")
      }

  return (
        <div>
            <div className="card w-[80%] bg-base-100 shadow-2xl">
<div className="card-body">
    <span className="badge badge-xs badge-warning">{CardInfo.tag}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{CardInfo.name}</h2>
      
      <div>
        <span className="text-xl">${CardInfo.price}</span>
      <p>{CardInfo.period}</p>
      </div>
    </div>
    <p className='text-gray-500'>{CardInfo.description}</p>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        CardInfo.features.map(feature=>{
            return(
                <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
            )
        })
      }
      
    </ul>
    <div className="mt-6">
      <button onClick={handleBuyNow} className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl btn-block">{BuyNow? "Added To Cart":"Buy Now"}</button>
    </div>
  </div>
                            </div>
        </div>
    );
};

export default CardMain;