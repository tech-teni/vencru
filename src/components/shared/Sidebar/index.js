import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import VideoPlayer from '../../reusable/VideoPlayer'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


const Sidebar = () => {
const location = useLocation()

  return (
    <div className='hidden lg:block bg-white w-1/5 pl-1 top-0 left-0 pt-2  h-[100vh] xl:min-w-[280px] fixed'>
    <div  className='w-11/12 ml-3'>
        <div className='flex items-center gap-1 text-black font-medium text-xl pl-1'>
              <img src='./images/logo.png'  alt='logo'/>
              <h1>Untitled UI</h1>
        </div>
        <div className='flex items-center gap-2 border-borderColor border-1 w-[92%] mt-3 h-10 rounded-lg	pl-2  '>
            <img src='./images/search.svg' alt='search icon' />
            <input  type='text' placeholder='Search' className='outline-0	 border-0 w-11/12 text-grey focus:outline-0 '/>
        </div>

          <ul className='mt-3 w-[97%]'>
            
          <li className='side-bar-link'>  <Link to='/' className=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/home.svg' alt='home' className='' /></div> <span className='side-bar-text'>Home</span></div> </Link></li>
          <li className='side-bar-link '>  <Link to='/' className=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/metrics.svg' alt='dashboard' className='' /></div> <span className='side-bar-text'>Dashboard</span></div> <span className='rounded-2xl bg-notificationColor w-10 h-7 flex items-center justify-center  text-sm  mr-3'>10</span></Link></li>
          <li className='side-bar-link '>  <Link to='/' clLinkssName=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/stack-file.svg' alt='home' className=''/></div> <span className='side-bar-text'>Projects</span></div> </Link></li>
          <li className='side-bar-link '>  <Link to='/' className=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/task.svg' alt='home' className=''/></div> <span className='side-bar-text'>Task</span></div> </Link></li>
          <li className='side-bar-link '>  <Link to='/' className=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/flag.svg' alt='home' className=''/></div> <span className='side-bar-text'>Reporting</span></div> </Link></li>
          <li className='side-bar-link '>  <Link to='/' className=' '><div className='flex items-center gap-3'><div className='w-5'><img src='./images/user.svg' alt='home' className=''/></div> <span className='side-bar-text'>Users</span></div> </Link></li>

          </ul>

          <ul className='mt-3 mb-2'>
          <li className='side-bar-link '>  <Link to='/' className=''><div className='flex items-center gap-3'><img src='./images/support.svg' alt='home' /> <span className='mt-[4px] text-base'>Support</span></div> </Link></li>
          <li className={location.pathname === '/' || location.pathname === '/settings'? 'side-bar-link bg-background rounded-lg':'side-bar-link'}>  <Link to='/' className=''><div className='flex items-center gap-3'><img src='./images/settings.svg' alt='home' /> <span className='mt-[4px] text-base'>Settings</span></div> </Link></li>

          </ul>



      <div className='bg-background w-[100%] py-3 px-[9%] mb-2 rounded-lg'>
        <h5 className='text-sm font-[500] mb-1'>New features available!</h5>
        <p className='text-[12px] leading-4 mb-2'>Check out the new dashboard view. Pages now load faster. </p>
           <VideoPlayer /> 
      <div className='flex gap-3 mt-2'>
        <p className='text-[12px] '>Dismiss</p>
        <Link  to='/' className='text-sm text-[#6941C6]'>What’s new?</Link>
      </div>
       </div>
          <Footer />







        </div>

    </div>
  )
}

export default Sidebar
