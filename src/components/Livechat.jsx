import React, { useEffect } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { genaratemessage, generatename } from '../utils/helper'

const Livechat = () => {
    const message = useSelector((state)=>state.chat.message)
    const dispatch = useDispatch();
    useEffect(()=>{
setInterval(()=>{
  dispatch(addMessage({name:generatename(),message:genaratemessage(12)}))
},1000)
    },[1])
  return (
        <div>
            {message.flatMap((item,idx) => 
               
                    <Chatmsg key={idx} item={item} />
                
            )}
        </div>
    );
}

export default Livechat
