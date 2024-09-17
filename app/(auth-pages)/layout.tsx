import Image from "next/image";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full flex gap-12 justify-start pl-[20vw] align-middle items-center h-[90vh]
      " 
      style={{background: 'url("/images/login.jpeg")', backgroundSize: 'cover',backgroundRepeat:'no-repeat' }}
      >
      {children}
      {/* <Image
        src="/images/login.jpeg"
        height={360}
        width={540}
        objectFit="cover"
        alt="project logo"
        className='w-full h-full -z-10 '
      /> */}
    </div>
  );
}
