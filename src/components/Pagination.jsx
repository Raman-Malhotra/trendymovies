import React,{useState} from 'react'

function Pagination({page,goa,gob}) {


 
  return (
    <div className=" mb-8 w-full flex justify-center">
    <button onClick={gob} className="p-2 border-2 border-r-0 rounded-l-xl border-indigo-500 text-indigo-500 ">Previous</button>
    <button className="p-2 bg-gray-100 border-2 border-indigo-500 text-indigo-500 ">{page}</button>
    <button onClick={goa} className="p-2 rounded-r-xl border-2 border-l-0 border-indigo-500 text-indigo-500 ">Next</button>



    </div>
  )
}

export default Pagination