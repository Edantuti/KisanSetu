
import AuthButton from '@/components/header-auth';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/home/mapsection.jsx'), { ssr: false });
import Image from 'next/image';
import Schemes from '@/components/home/schemes'

export default async function Index() {
  return (
    <>
      <div className=''>
        {/* <nav className="w-[100%] flex justify-between absolute z-10 bg-transparent px-5 py-2">
          <div className='flex flex-col justify-center items-center  w-[100px] '>
            <Image
              src="/images/home/logo.svg"
              height={144}
              width={100}
              alt="project logo"
              className=''
            />
            <p className='font-bold'>Krishi Setu</p>
          </div>
          <div className='flex justify-evenly items-center gap-5 font-bold  '>
            <div>Community</div>
            <div>Blogs</div>
            <AuthButton />
          </div>
        </nav> */}
        <div className='h-[83vh]  top-0 flex w-full overflow-x-hidden'>
          <Image
            src="/images/home/kisan.png"
            height={1440}
            width={1000}
            alt="project logo"
            className='w-[50%]'
          />
          <Image
            src="/images/home/tractor.jpg"
            height={351}
            width={626}
            alt="project logo"
            className='w-[50%]'
          />
          {/* <Image
            src="/images/home/homepage.jpg"
            height={1440}
            width={1000}
            alt="project logo"
            className='w-[100%]'
          /> */}
          <div className='absolute h-[75vh] w-[100%] justify-center align-middle text-center  flex flex-col   font-bold text-6xl text-[black] '>
            {/* <div className='bg-red flex flex-col w-[50%] justify-center text-center'> */}
            <p>Sath Badhaye </p>
            <p>Sambhavnayein</p>
            {/* </div> */}
          </div>
        </div>
        <div className='h-[18vh] w-full bg-[#c8aa8b] flex justify-center  z-20'>
          <div className='flex flex-col justify-center items-center w-[15%] h-[100%] mr-[5%]  '>
            <div className='w-[100%] h-full flex flex-col justify-center items-center bg-[#a0785e] ml-[10vw] hover:outline p-4'>
              <Image
                src="/images/home/nav.svg"
                height={40}
                width={20}
                alt="project logo"
                className='w-[40%]'
              />
              <p className='text-xl text-white'>Locate Farm</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-[15%] h-[100%] p-2 group hover:bg-[#a0785e]  hover:shadow-xl   z-2 '>
            <Image
              src="/images/home/2nd.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[35%] group-hover:scale-125'
            />
            <p className='text-xl group-hover:scale-125 group-hover:text-white group-hover:mt-3'>Sell Harvest</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[15%] h-[100%] p-2 group hover:bg-[#a0785e]  hover:shadow-lg '>
            <Image
              src="/images/home/inkpaper.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[35%] group-hover:scale-125'
            />
            <p className='text-xl group-hover:scale-125 group-hover:mt-3 group-hover:text-white'>Create Contracts</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[15%] h-[100%] p-2 group hover:bg-[#a0785e]  hover:shadow-lg '>
            <Image
              src="/images/home/coins.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[35%] group-hover:scale-125'
            />
            <p className='text-xl group-hover:scale-125 group-hover:mt-3 group-hover:text-white'>payments</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[15%] h-[100%] p-2 mr-[10vw] group hover:bg-[#a0785e]  hover:shadow-lg'>
            <Image
              src="/images/home/trailer.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[55%] group-hover:scale-125'
            />
            <p className='text-xl group-hover:scale-125 group-hover:mt-3 group-hover:text-white'>Logistics & Storage</p>
          </div>
        </div>
        <div className='h-[90vh] bg-[#f4e9dc] px-10'>
         <MapComponent/>
        </div>
        <Schemes/>
      </div>
    </>
  );
}
