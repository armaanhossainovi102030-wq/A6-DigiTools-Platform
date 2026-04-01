import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar'
import Rating from './Components/Rating'
import Started from './Components/Started'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

const CardData = async()=>{
  const res =await fetch("/public/data.json")
  return res.json()
}

  


function App() {
  const CardPromise = CardData()
  return (
    <>
      
      <NavBar></NavBar>
      <Banner/>
      <Rating></Rating>
      
      <Suspense>
        <Card CardPromise={CardPromise}></Card>
      </Suspense>
      <Started></Started>
      <Pricing></Pricing>
      <Footer></Footer>

     </>
  )
  
}

export default App
