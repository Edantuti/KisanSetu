"use client"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function MapConponent() {
  AOS.init();
  return (
    <>
    <div className=" w-full h-[90vh] bg-[#f4e9dc] ">
      <div className='text-6xl py-20 w-full  text-[#805d46] font-bold'>Nearby Farms & Contracts</div>
      <div className='border-solid border-[#805d46] border-[6px] border-r-0 rounded-md h-[500px] ml-[35%] right-0 '>
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-offset="300"
          data-aos-duration="1000"
          className='h-[40%] absolute w-[50vw] border-solid border-[#805d46] border-[4px] rounded-md  my-20 -ml-[20%]'>
          hello i am solman tuti bhai , if need deer meet contact me or if needed a place to make free from footpath people plz contact me.
        </div>
      </div>
      </div>
    </>
  );
}