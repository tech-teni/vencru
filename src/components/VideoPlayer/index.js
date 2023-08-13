import React, { useState,useEffect } from 'react'

const VideoPlayer = () => {
const [hideControl, setHideControl] =useState(false)


useEffect(()=>{

  setHideControl(false)


}, [])

// ' '
  return (
    <div
    className='max-h-[128px] '
    onClick={(e)=>{
      e.preventDefault();
      setHideControl(true)
    }}>   
        <video   
          className={hideControl? ' mb-0 h-[128px]  w-100%':  'video mb-3 h-[128px]' }
          height="450" 
          controls
          poster="./images/Image.png">
        <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
                type="video/mp4"/>
      </video> 
      <button className={hideControl === false? 'h-10  w-10 mt-[-20px] translate-y-[-50px]  rounded-[50%] translate-x-[15%] xl:translate-x-[45%] flex items-center justify-center': ' hidden '  } onClick={(e)=>{

      }}  >
<img src='./images/play.svg' alt='play' />
   
      </button>
</div>
  )
}

export default VideoPlayer
