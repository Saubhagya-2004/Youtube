import React, { useState } from 'react'
import { Youtube_Api } from '../utils/constant'
import { useEffect } from 'react'
import ViedioCard from './viedioCard'
const Viediocontainer = () => {
  const [videos,setviedios] = useState([]);
  useEffect(()=>{
    getdata();
  },[]);
  const getdata =async()=>{
    const data = await fetch(Youtube_Api);
    const json = await data.json();
    console.log(json);
     
    setviedios(json.items);
    
  }
  return (
    <div className='flex flex-wrap justify-center mt-[100px]'>
      {
        videos.map((video)=>(
          <ViedioCard key={video.id} info={video}/>
        ))
      }
    </div>
  )
}

export default Viediocontainer
