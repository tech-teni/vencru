import React from 'react'
import Table from '../../reusable/Table'

const BillingHistory = () => {
  return (
    <section className="mobile-pad mt-6 ">
    <div className="mb-5 flex flex-col lg:flex-row lg:items-center  lg:justify-between md:flex-row md:justify-between">      
          <h3 className="section-header ">Billing history</h3>
                <button  className=" h-10 w-[146px]  flex gap-[6px] border-borderColor border-1 rounded-lg justify-center items-center text-sm bg-white text-navcolor mt-3"><img src='./images/download.svg' alt='download'/><span>Download all</span></button>
    </div>


                <div className="max-w-[100%] overflow-x-scroll">
                <Table />
                </div>



          </section>
  )
}

export default BillingHistory
