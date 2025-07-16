import React from 'react'
import Chatmsg from './Chatmsg'
import { useSelector } from 'react-redux'

const Livechat = () => {
    const message = useSelector((state)=>state.chat.message)
  return (
    <div>
     {
        message.map((item,idx)=>{
            return(

                <Chatmsg key={idx} item={item}/>
            )
        })
     }
    </div>
  )
}

export default Livechat
