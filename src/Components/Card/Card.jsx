import React, { use } from 'react';

const Card = ({CardPromise}) => {
const CardInfos =use(CardPromise)
    console.log(CardInfos)
    return (
        <div>
            <div className='flex flex-col p-20  items-center'>
                <h2 className='text-2xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br></br></p><span className='flex items-center text-gray-500'>to boost your productivity and creativity.</span>
                <div className='mt-5'>
                <button className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl ">Products</button>
                <button className="ml-2  btn btn-outline rounded-2xl ">Cart(2)</button>

            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[80%] mx-auto space-y-3'>
                {
                    CardInfos.map(CardInfo=>{
                        return(
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
      <button className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl btn-block">Buy Now</button>
    </div>
  </div>
                            </div>
                        )
                    })
                }
            </div>
            
            
        </div>
    );
};

export default Card;