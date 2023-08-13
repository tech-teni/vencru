import React from 'react'

const Header = () => {
  return (
    <header className='mt-[54px] lg:mt-0  '>
    <h1 className='text-2xl pl-2 md:text-3xl font-medium	text-black mobile-pad '>Settings</h1>
    <p className='text-grey  pl-2 text-base	mb-5  mobile-pad'>Manage your team and preferences here.</p>
    <ul className='flex mb-7  min-[787px]:ml-[3%]  overflow-x-scroll md:overflow-x-hidden scrollbar-none md:px-[2%] no-scrollbar::-webkit-scrollbar  no-scrollbar'>
      <li className='nav-button rounded-bl-lg rounded-tl-lg'><button>My details</button></li>
      <li className='nav-button'><button>Profile</button></li>
      <li className='nav-button'><button>Password</button></li>
      <li className='nav-button'><button>Team</button></li>
      <li className='nav-button'><button>Plan</button></li>
      <li className='nav-button'><button>Billing</button></li>
      <li className='nav-button'><button>Notifications</button></li>
      <li className='nav-button'><button>Integrations</button></li>
      <li className='nav-button border-r-1 rounded-br-lg rounded-tr-lg'><button>API</button></li>

    </ul>

     </header>


  )
}

export default Header
