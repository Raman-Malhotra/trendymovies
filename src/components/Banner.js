import React,{useState,useEffect} from 'react'
import banner from './banner.jpg'
import axios from'axios'

function Banner() {
  const [movies,setMovies]=useState({});
  useEffect(() => {
     axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4ca5e1fdc790cca8c2c5889cee52ad6f").then((res)=>{
setMovies(res.data.results[0])
console.table(res.data.results)
     })
   
  },[])
  return (
    <div className={`bg-[url(${`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
<div className="md:text-3xl text-xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center">
    {movies.title}
</div>

    </div>
  )
}

export default Banner