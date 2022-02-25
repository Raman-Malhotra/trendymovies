import React, { useState,useEffect } from 'react'
import banner from './banner.jpg'
import axios from 'axios'
import Pagination from './Pagination'
import { Audio,Oval } from  'react-loader-spinner'

function Movies() {
   const [movies,setMovies]=useState([]);
   let [pageNumber,setPage]=useState(1);
   const [hover,setHover]=useState(''); 
   let [favourites,setFavourites]=useState([]);

   function add(movie){
      let newa=[...favourites,movie];
      setFavourites(newa)
      console.log(favourites);
      localStorage.setItem("imdb",JSON.stringify(newa))

   }

   function goAhead(){
     setPage(pageNumber+1);
    
   }
   function goBehind()
   {
     if(pageNumber>1)
     setPage(pageNumber-1);
   }
   useEffect(() => {
      
      axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=4ca5e1fdc790cca8c2c5889cee52ad6f&page=${pageNumber}`).then((res)=>{
setMovies(res.data.results)
console.table(res.data.results)
let oldFav=localStorage.getItem("imdb");
oldFav=JSON.parse(oldFav)||[];
setFavourites([...oldFav])
      })
    
   },[pageNumber])
   
  let del=(movie)=>{
     let newArray=favourites.filter((m)=>m.id!=movie.id);
     setFavourites([...newArray])
     localStorage.setItem("imdb",JSON.stringify(newArray));
  }
  return (
   <>
   <div className="mb-8">
       <div className="mt-8 text-center font-bold text-2xl">Trending Movies

       {
          movies.length==0?
          <div className='flex justify-center'> <Oval
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  /></div>
         : <div className="flex flex-wrap justify-center">
         {
            /* <div className={` hover:scale-110 ease-out duration-300 m-4 flex items-end rounded-xl bg-[url(${banner})] h-[25vh] w-[150px] md:h-[30vh] md:w-[200px] bg-center bg-cover `}>

<div className="bg-gray-900 w-full text-white py-2  text-center rounded-b-xl">{movies[0].title}</div>


</div> */


movies.map((movie)=>(<div onMouseLeave={()=>{setHover('')}} onMouseEnter={()=>{setHover(movie.id)}} className={` hover:scale-110 ease-out duration-300 m-4 relative flex items-end rounded-xl bg-[url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})] h-[25vh] w-[150px] md:h-[30vh] md:w-[200px] bg-center bg-cover `}>
{movie.id==hover&&<>{favourites.find((m) => m.id==movie.id)?<div onClick={()=>{del(movie)}} className=" cursor-pointer absolute rounded-xl top-2 right-2 p-2 bg-gray-800">❎</div>:<div onClick={()=>{add(movie)}} className=" cursor-pointer absolute rounded-xl top-2 right-2 p-2 bg-gray-800">❤️</div>}</>}

<div className="bg-gray-900 w-full text-white py-2  text-center rounded-b-xl">{movie.title}</div>


</div>
))
              
               


            
         }
    
   


</div>
       }
      
       
       </div>
       
       </div>
       <Pagination page={pageNumber} goa={goAhead} gob={goBehind}/>
   </>
  )
}

export default Movies