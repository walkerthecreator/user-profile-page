import Link from "next/link";

export default function Page(){
  return <div className="w-3/4 mx-auto grid min-h-screen place-items-center">
    <h1 className="text-5xl font-bold">Let&apos;s Visit Some User&apos;s Profile</h1>
    <Link href={'/users/3'} className="p-2 animate-bounce rounded-xl text-white px-3 bg-blue-500 ">Let&apos;s Get Started</Link>
  </div>
}

