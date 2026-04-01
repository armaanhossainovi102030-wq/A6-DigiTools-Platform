import React from 'react';

const Banner = () => {
    return (
        <div className='flex max-w-[80%] mx-auto justify-between  mt-10 items-center '>
            <div className='space-y-3'>
                <h2 className=' text-2xl font-bold'>Supercharge Your <br/>Digital Workflow</h2>
                
                <p className='text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br></br>software—all in one place. Start creating faster today.<br/>Explore Products
                </p>
                 <div className='flex items-center'>
                    <button className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl ">Get Started</button>
                 <button className="btn btn-outline btn-success ml-2   rounded-2xl ">Watch Demo</button>

                 </div>
            </div>
            <div>
                <img className='h-[590] w-[500]' src="/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;