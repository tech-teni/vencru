
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Table from "../components/Table";
function Setting() {
  return (
    <div className="bg-background min-h-screen m-0">
      <Navbar />
      <div className="">
        <Sidebar />
        <div className="lg:ml-[18%]  pt-4 ">
          <Header />
          <section>
            <h3 className="section-header mobile-pad">Payment method</h3>
            <p className="mobile-pad">Update your billing details and address.</p>

            <div className="sub-container flex  flex-col mx-[5%] min-[787px]:flex-row w-[100%]">
              <div className="flex-none mb-5 min-[787px]:w-[28%] xl:w-[20%]" >
                <h5 className="text-base text-navcolor  font-medium">
                  Contact email
                </h5>
                <p>Where should invoices be sent?</p>
              </div>
              <div className="md:w-[60%]">
                <div className="">
                  <div className="flex items-start gap-1 ">
                    <input type="radio" className="mt-1 accent-primary-200" name="send" />
                    <label className="flex flex-col mb-2 w-[100%]" >
                      <b className="text-navcolor  text-sm font-medium	">
                        Send to my account email
                      </b>
                      <p className="">olivia@untitledui.com</p>
                    </label>
                  </div>
                  <div className="flex items-start gap-2 flex-1 mt-2">
                    <input
                      type="radio"
                      className="mt-1 accent-primary-200 "
                      name="send"
                      defaultChecked
                    />
                    <label className="flex flex-col mb-2 grow ">
                      <b className="text-navcolor font-medium text-sm mb-2 ">
                      Send to an alternative email
                      </b>
                      <div className="flex bg-white py-2 px-3 rounded-xl gap-3 h-11 border-borderColor border-1  w-[90%] max-w-[380px]  min-[787px]:max-w-[430px]">
                        <img src="./images/message.svg" alt="message" />
                        <input
                          type="text"
                          defaultValue={"billing@untitledui.com"}
                          className="w-full border-none outline-0	text-black text-base "
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-container flex flex-col gap-4 mobile-pad   min-[787px]:flex-row w-[100%]">
              <div className="min-[787px]:w-[28%] xl:w-[20%]">
                <h5 className="text-base text-navcolor font-medium">
                  Card details
                </h5>
                <p>Select default payment method.</p>
              </div>
              <div className="md:w-[73%]">
              <div className="checked w-[100%] p-[3%]">
                  <div className=" flex items-start  gap-4">
                    <img src="./images/visa.png" />
                    <div className="">
                    <div className="text-[#53389E] text-sm">Visa ending in 1234</div>
                    <div className="text-sm text-[#7F56D9] mb-3 font-normal">Expiry 06/2024</div>
                    <div  className="text-sm flex gap-2"><span className="text-sm text-[#7F56D9] mb-3">Set as default</span><b className="text-sm text-[#53389E] mb-3">Edit</b></div>

                  </div>

                  </div>
                  <div className="   ">
                    <input type='checkbox' defaultChecked className="accent-primary-200  p-2 w-4 h-4  rounded-[50%] "/>
                    
                    </div>
                </div>

                <div className="unchecked w-[100%] p-[3%] mt-4">
                  <div className="flex items-start  gap-4">
                    <img src="./images/master-card.png" />
                    <div className="">
                    <div className=" text-sm">Mastercard ending in 1234</div>
                    <div className="text-sm  mb-3 text-grey">Expiry 06/2024</div>
                    <div  className="text-sm flex gap-2 text-grey"><span className="text-sm text-[#7F56D9] mb-3">Set as default</span><b className="text-sm text-[#53389E] mb-3">Edit</b></div>

                  </div>

                  </div>
                  <div>                    <input type='checkbox'  className="accent-primary-200  p-2 w-4 h-4  rounded-[50%] "/>
              </div>
                </div>

                <button className="flex mt-3 gap-3 items-center outline-0 ">
                  <img src='./images/add.svg'  alt='add' />
                  <p className="text-base">Add new payment method</p>
                </button>

              </div>
            </div>
          </section>
          <section className="mobile-pad mt-6 ">
    <div className="mb-5 flex flex-col lg:flex-row lg:items-center  lg:justify-between md:flex-row md:justify-between">      
          <h3 className="section-header ">Billing history</h3>
                <button  className=" h-10 w-[146px]  flex gap-[6px] border-borderColor border-1 rounded-lg justify-center items-center text-sm bg-white text-navcolor mt-3"><img src='./images/download.svg' alt='download'/><span>Download all</span></button>
    </div>


                  <Table />



          </section>
        </div>
      </div>
    </div>
  );
}

export default Setting;
