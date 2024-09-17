import NavBar from "@/components/common/NavHome";
import Image from "next/image";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar absoluteLago={true} />
      <div className=" w-full flex gap-12 justify-start pl-[20vw] align-middle items-center h-[90vh] bg-[url('/images/login.jpeg')] bg-cover bg-no-repeat">
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
    </>
  );
}
