import Image from "next/image"
import AuthButton from '@/components/header-auth';
export default async function NavBar() {
    return(
        <>
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
        </>
    )
}