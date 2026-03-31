import React from 'react';

import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div> */}
      {/* <ul
        // tabIndex="-1"
        className="  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul> */}
    </div>
    <a className="btn btn-ghost text-xl bg-gradient-to-r  from-violet-500 to-fuchsia-500 bg-clip-text text-transparent ">DigiTools</a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold ">
      <li><a className='font-bold'>Products</a></li>
      <li><a>Features</a></li>
      
      {/* <LuShoppingCart/> */}
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      <li>
        {/* <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details> */}
        
      </li>
    
    </ul>
  </div>
  <div className="navbar-end ">
    <button><ShoppingCart /></button>
    <h2 className='font-bold ml-2' >Login</h2>
    <a className="ml-1 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl ">Get Started</a>
     
  </div>
</div>
<div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
    
        </div>
    );
};

export default NavBar;