// import { usePathname } from 'next/navigation';
import Image from "next/image";
import AuthButton from "@/components/header-auth";
import Link from "next/link";
import { Button } from "../ui/button";
// import { headers } from 'next/headers';

export default function NavBar({ absoluteLago }: { absoluteLago: boolean }) {
  // const pathname = usePathname();
  // const _headers = headers();
  // console.log(_headers);
  // const currentPathname = _headers.get('x-pathname');
  // console.log(currentPathname);

  // Check if the current route is the home page
  const isHomePage = "";

  return (
    <nav
      className={`w-[100%] ${!absoluteLago && `bg-[#f4d8bf]`} flex justify-between ${absoluteLago && "absolute"} backdrop-blur-xl backdrop:bg-slate-600 z-10  px-5 py-2`}

      // style={isHomePage ? {} : { background: 'linear-gradient(90deg, rgba(195,196,5,1) 8%, rgba(9,121,24,1) 52%, rgba(14,177,46,1) 100%)' }}
    >
      <div className="flex flex-col justify-center items-center w-[100px]">
        <Image
          src="/images/home/logo.svg"
          height={144}
          width={100}
          alt="project logo"
          className=""
        />
        <p className="font-bold text-lg">Krishi Setu</p>
      </div>
      <div className="flex justify-evenly items-center gap-5 font-bold text-xl">
        <Button
          asChild
          variant="link"
          size="sm"
          className="text-xl font-semibold"
        >
          <Link href="/dashboard/contract">Contracts</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="link"
          className="text-xl font-semibold"
        >
          <Link href="/community">Community</Link>
        </Button>
        <Button
          size="sm"
          asChild
          variant="link"
          className="text-xl font-semibold"
        >
          <Link href="/dashboard/chat">Chat</Link>
        </Button>
        <AuthButton />
      </div>
    </nav>
  );
}
