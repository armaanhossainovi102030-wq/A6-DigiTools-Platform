import React from 'react';

const Started = () => {
    return (
        <div className=''>
        <div className='flex flex-col items-center p-5 mt-7'>
            <h2 className='text-2xl font-bold'>Get Started In 3 Steps</h2>
            <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto'>
            <div className="card bg-base-100 w-[80] shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src='/public/assets/user.png'
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card required to get started.</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
        </div>
            <div className="card bg-base-100 w-96 shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src='/public/assets/package.png'
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p>Browse our catalog and select the toolsthat fit your needs.</p>
    
  </div>
        </div>
            <div className="card bg-base-100 w-96 shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src='/public/assets/rocket.png'
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p>Download and start using your premium tools immediately.</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
        </div>
            
        </div>


        </div>
    );
};

export default Started;