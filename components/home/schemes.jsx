
import Image from "next/image"
export default function MapConponent() {
    return(
        <>
        <div className="bg h-[120vh] block " style={{background: 'url("/images/home/leaves.png")', backgroundSize: 'contain',backgroundRepeat:'no-repeat' }}>
        <div className="text-center text-[#566638] text-6xl mt-[20vh]">
        Government Schemes & Blogs
        </div>
        <div className="flex justify-center items-center mt-[23vh] gap-16">
        <div className="h-[55vh] group flex flex-col justify-around items-center hover:scale-110 gap-4 bg-[#c8aa8b] w-[40vh] p-4 py-20 rounded-xl">
        <Image
              src="/images/home/pmfb.png"
              height={194}
              width={259}
              alt="project logo"
              className='w-[75%] '
            />
            <div className="text-[#566638] text-2xl text-center ">Pradhanmantri Fasal Bima Yojana</div>
        </div>
        <div className="h-[55vh] group flex flex-col justify-around items-center hover:scale-110 gap-4 bg-[#c8aa8b] w-[40vh] p-4 py-20 rounded-xl">
        <Image
              src="/images/home/Agriculture_Insurance_Company_of_India.svg"
              height={194}
              width={259}
              alt="project logo"
              className='w-[75%] '
            />
            <div className="text-[#566638] text-2xl text-center ">Agriculture Insurance Company ofIndia</div>
        </div>
        <div className="h-[55vh] group flex flex-col justify-around items-center hover:scale-110 gap-4 bg-[#c8aa8b] w-[40vh] p-4 py-20 rounded-xl">
        <Image
              src="/images/home/SHC.png"
              height={194}
              width={259}
              alt="project logo"
              className='w-[75%]'
            />
            <div className="text-[#566638] text-2xl text-center ">Soil Health Card</div>
        </div>
        </div>
        
        </div>
        </>
    )
}