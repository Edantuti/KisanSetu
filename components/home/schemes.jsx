
import Image from "next/image"
export default function MapConponent() {
    return(
        <>
        <div className="bg mt-10 " style={{background: 'url("/images/home/leaves.png")', backgroundSize: 'contain',backgroundRepeat:'no-repeat',height: '130vh' }}>
        <div className="text-center text-[#566638] text-6xl mt-[20vh]">
        Government Schemes & Blogs
        </div>
        <div className="flex justify-center items-center mt-[25vh] gap-16">
        <div className="h-[60vh] bg-[#c8aa8b] w-[40vh] rounded-xl"></div>
        <div className="h-[60vh] bg-[#c8aa8b] w-[40vh] rounded-xl"></div>
        <div className="h-[60vh] bg-[#c8aa8b] w-[40vh] rounded-xl"></div>
        </div>
        
        </div>
        </>
    )
}