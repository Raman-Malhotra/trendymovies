import React,{useState} from 'react'
import icon from "../icon.png"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div className="border py-4 pl-12 px-8 flex space-x-8 items-center">
    <img className="w-[50px] md:w-[80px]" src={icon}></img>
       <Link to="/" className="text-blue-400 font-bold text-xl md:text-3xl">Movies</Link>
       <Link to="/favourites"  className="text-blue-400 text-xl font-bold md:text-3xl">Favourite</Link>
       </div>
      

   </>
  )
}

export default Navbar