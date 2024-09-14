
import AuthButton from '@/components/header-auth';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/home/mapsection.jsx'), { ssr: false });
import Image from 'next/image';

export default async function Index() {
  return (
    <>
      <div className=''>
        <nav className="w-[100%] flex justify-between absolute z-10 bg-transparent px-5 py-2">
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
        </nav>
        <div className='h-[75vh]  top-0 flex w-full overflow-x-hidden'>
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
          <div className='absolute h-[75vh] w-[100%] flex flex-col justify-center items-center font-bold text-6xl text-[#d4cdc6] text-center'>
            <p>Sath Badhaye </p>
            <p>Sambhavnayein</p>
          </div>
        </div>
        <div className='h-[25vh] w-full bg-[#c8aa8b] flex z-20'>
          <div className='flex flex-col justify-center items-center w-[20%] h-[100%] '>
            <div className='w-[80%] h-full flex flex-col justify-center items-center bg-[#805d46] p-4'>
              <Image
                src="/images/home/nav.svg"
                height={40}
                width={20}
                alt="project logo"
                className='w-[65%]'
              />
              <p className='text-3xl'>Locate Farm</p>
            </div>

          </div>
          <div className='flex flex-col justify-center items-center w-[20%] h-[100%] p-2 '>
            <Image
              src="/images/home/2nd.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[45%]'
            />
            <p className='text-3xl'>Sell Harvest</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[20%] h-[100%] p-2 '>
            <Image
              src="/images/home/inkpaper.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[45%]'
            />
            <p className='text-3xl'>Create Contracts</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[20%] h-[100%] p-2  '>
            <Image
              src="/images/home/coins.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[45%]'
            />
            <p className='text-3xl'>payments</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[20%] h-[100%] p-2 '>
            <Image
              src="/images/home/trailer.svg"
              height={40}
              width={20}
              alt="project logo"
              className='w-[65%]'
            />
            <p className='text-3xl'>Logistics & Storage</p>
          </div>
        </div>
        <div className='h-[90vh] bg-[#f4e9dc] px-10'>
         <MapComponent/>
        </div>
      </div>
    </>
  );
}
