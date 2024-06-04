import React from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"
function App() {


  return (
    <div className="h-full">
      <Navbar/>
      <Home/> 
      <About/>
    </div>
  )
}

export default App
