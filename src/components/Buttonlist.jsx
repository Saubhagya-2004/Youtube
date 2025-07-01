import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  const list = ["All","Music","Gaming","Movies","News","Live","Soccer","Sports","Comedy","Education"]
  
  return (
    <div className='flex justify-center rounded-2xl flex-wrap space-x-12 p-1 item-center '>
      
        {
          list.map((item, index) => {
            return (
              <div key={index}>
                <Button name={item} />
              </div>
            )
          })
        }
      </div>
   
  )
}

export default Buttonlist