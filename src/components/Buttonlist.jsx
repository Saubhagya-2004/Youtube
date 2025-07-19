import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';

const Buttonlist = () => {
  const [active, setActive] = useState("All");
  const list = ["All", "Music", "Gaming", "Movies", "News", "Live", "Soccer", "Sports", "Comedy", "Education", "Trending", "Vlogs", "Technology"];
  const dispatch= useDispatch();
const viediotag=(tag)=>{
if(active!=tag){
  dispatch(setCategory(tag))
  setActive(tag)
}
}
  return (
    <div className='flex sticky z-0 w-full rounded-2xl space-x-12 p-1 font-medium overflow-x-scroll scroll-smooth no-scrollbar'>
     {list.map((item, index) => (
  <div key={index}>
    <Button 
      name={item} 
      active={active} 
      viediotag={viediotag} 
    />
  </div>
))}
    </div>
  );
};

export default Buttonlist;