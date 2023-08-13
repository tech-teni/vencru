import React from 'react'

const Footer = () => {
  return (
    <div  className='flex justify-between items-start border-t-1 border-borderColor pt-4'>
      <div className='flex gap-2'>    
          <img src='./images/Avatar.png' alt='user image' className='rounded-[50%]'/>
          <div>
        <h3 className='text-black text-sm'>Olivia Rhye</h3>
        <p className='mt-[-3px] text-sm'>olivia@untitledui.com</p>
      </div>

      </div>

      <img src='./images/logout.svg' alt='logout' className='mr-2'/>
    </div>
  )
}

export default Footer
