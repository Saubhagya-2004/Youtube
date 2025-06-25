import React from 'react'
import { Youtube_Api } from '../utils/constant'
import { useEffect } from 'react'

const Viediocontainer = () => {
  useEffect(()=>{
    getdata();
  },[]);
  const getdata =async()=>{
    const data = await fetch(Youtube_Api);
    const json = await data.json();
    console.log(json);
    
  }
  return (
    <div>
      video container
    </div>
  )
}

export default Viediocontainer
