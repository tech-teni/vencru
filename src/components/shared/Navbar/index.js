import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white w-screen h-16 py-2 mobile-pad lg:hidden flex items-center justify-between  drop-shadow-sm fixed'>
     <div className='flex items-center gap-1 text-black font-medium text-xl'>
      <img src='./images/logo.png'  alt='logo'/>
      <h1>Untitled UI</h1>
     </div>

     <div className='mr-[3%]'>
      <img src='./images/mobile-navigator.svg' alt='navigator'/>
     </div>
    </div>
  )
}

export default Navbar
