import React from 'react'

const Table = () => {
  return (




    <table className="w-[100%] bg-white  border-shadow shadow border-1 mb-[200px] ">
    <thead className=''>
    <tr className=''>
    <th className='flex items-center gap-2  min-w-[228px]'><input type='checkbox' className='w-3 h-3' /> <span>Invoice</span> <img src='./images/descending.svg' alt='descending'/></th>
    <th className='min-w-[128px]'>Amount</th>
    <th className='min-w-[128px]'>Date</th>
    <th className='min-w-[128px]'>Status</th>
    <th className='min-w-[128px]'>Users on plan</th>
    <th className='min-w-[70px]'></th>

  </tr>
  
    </thead>
    <tbody>
<tr>
<td className='flex gap-2 items-center justify-start'><input type='checkbox' className='w-3 h-3 ' /> <span className=' text-black text-sm' >Basic Plan – Dec 2022</span></td>
<td className='text-grey text-sm'>USD $10.00</td>
<td className='text-grey text-sm'>Dec 1, 2022</td>
<td className='text-[#027A48] text-sm'><button className='flex items-center justify-center gap-1 bg-[#ECFDF3]  px-2 py-1 rounded-2xl min-w-[55px] h-[22px]'><img src='./images/mark.svg' alt='mark up'/>  <span>Paid</span></button></td>
<td className='text-grey'><span className='flex '>
<span className=''> </span>
<span className='user-pic'><img src='./images/Avatar (1).png'alt='pic'/> </span>
<span className='user-pic ml-[-10px]'><img src='./images/Avatar wrap (2).png'alt='pic'/> </span>
<span className='user-pic ml-[-10px]'><img src='./images/Avatar wrap.png'alt='pic'/> </span>
<span className='user-pic ml-[-10px]'><img src='./images/Avatar wrap (2).png'alt='pic'/> </span>
<span className='user-pic ml-[-10px]'><img src='./images/Avatar wrap (2).png'alt='pic'/> </span>

<span className='user-pic ml-[-10px]' >+2</span>

     </span></td>
     <td><img src='./images/download2.svg'alt='download'/></td>




</tr>

    </tbody>

    </table>
  )
}

export default Table
