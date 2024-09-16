"use client"
import AOS from "aos"
import 'aos/dist/aos.css'
import Image from 'next/image';

export default function MapConponent() {
  AOS.init();
  return (
    <>
    <div className=" w-full h-[90vh] bg-[#f4e9dc]  ">
      <div className='text-6xl py-20 w-full  text-[#805d46] font-bold'>Nearby Farms & Contracts</div>
      <div className='border-solid border-[#805d46] border-[6px] border-r-0 rounded-md h-[500px] ml-[35%] right-0 '>
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-offset="300"
          data-aos-duration="1000"
          className='h-[50%] absolute w-[50vw] border-solid border-[#805d46] border-[4px] rounded-md  my-10 -ml-[20%]'>
          <Image
                src="/images/home/homemap.png"
                height={768}
                width={1366}
                alt="project logo"
                className=' h-full'
              />
        </div>
        <div className="text-[#805d46] w-[15vw] ml-[40vw] mt-[8vw] text-2xl">
        Find new contracts and other farms/community  in your area. Build larger community to avail bigger contracts.
        </div>
      </div>
      </div>
    </>
  );
}