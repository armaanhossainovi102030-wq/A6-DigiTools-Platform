import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar'
import Rating from './Components/Rating'
import Started from './Components/Started'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import Cart from './Components/Cart'

const CardData = async()=>{
  const res =await fetch("/public/data.json")
  return res.json()
}

  


function App() {
  const [ActiveTab, setActiveTab] = useState("products")
  const [Carts, setCarts]= useState([])
  const CardPromise = CardData()
  return (
    <>
      
      <NavBar></NavBar>
      <Banner/>
      <Rating></Rating>
      
      <div>
        <div className='flex flex-col p-20  items-center'>
                <h2 className='text-2xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br></br></p><span className='flex items-center text-gray-500'>to boost your productivity and creativity.</span>
                <div className='mt-5'>
                <button onClick={()=>setActiveTab("products")} className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white btn rounded-2xl ">Products</button>
                <button onClick={()=>setActiveTab("cart")}  className="ml-2  btn btn-outline rounded-2xl ">Cart(2)</button>

            </div>
            </div>
      </div>
      {ActiveTab==="products" && <Suspense>
        <Card CardPromise={CardPromise} Carts={Carts} setCarts={setCarts}></Card>
      </Suspense>}
      {ActiveTab==="cart" && <Cart Carts={Carts}></Cart>}
      <Started></Started>
      <Pricing></Pricing>
      <Footer></Footer>

     </>
  )
  
}

export default App
