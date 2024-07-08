import Experience from "@/components/Experience"
import Header from "@/components/Headers"
import Achivements from "@/components/Achievements"
import Link from "next/link"

export default async function Home({ params } : { params : { id : string } }){
  
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/${params.id}`) 
  const response = await data.json()
  const user = response.data
  console.log(user.hackathons)

  return <main className="min-h-screen bg-stone-100">
    <div className="w-[90%] md:w-4/5 mx-auto">
      <Header links={user.links[0]} user={{ name : user.name , id : user.id ,  email : user.email , profile : user.profile , banner : user.banner }} />
      <Experience projects={user.projects} work={user.work} />
      <Achivements 
        hackathons={user.hackathons} 
        certificates={user.certificates}
        />
      <div className="">
          <h1 className="text-xl font-medium text-center p-3 bg-white shadow-lg rounded-md">
            Built By 
            <Link href="https://nitinjaswal.vercel.app" className="mx-2 bg-blue-500 p-1 px-2 text-white rounded-md">
              Nitin Jaswal 
            </Link>
          </h1>
      </div>
    </div>
  </main>
}