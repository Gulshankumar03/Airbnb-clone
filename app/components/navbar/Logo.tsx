"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <div>
      {/* <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    /> */}
    <h1 className="font-bold text-red-500 text-2xl">AASHIYANA</h1>
    </div>
  );
};
export default Logo;
