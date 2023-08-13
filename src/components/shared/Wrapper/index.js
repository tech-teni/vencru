import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Wrapper = ({children}) => {
  return (
            <div className="bg-background min-h-screen m-0 overflow-x-hidden ">
                <Navbar />
                <div className="">
                    <Sidebar />
                    <div className="lg:ml-[18%]  pt-6  lg:pt-4">
                    {children}
                    </div>
                </div>
                </div>
  )
}

export default Wrapper
