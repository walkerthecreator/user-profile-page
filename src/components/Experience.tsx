import { Plus } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DatePicker from "./DatePicker";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { formatDate } from "@/lib/utils";
import { Switch } from "./ui/switch";

interface ProjectType {
    id : number , 
    userId : number  
    name : string ,
    description : string ,
    year : string
}

interface WorkType {
    id : number ,
    userId : number 
    name : string ,
    startingDate : string ,
    endingDate : string ,
    isPresent : boolean ,
    organisation : string 
}

export default function Experience({ projects , work  } : { projects : ProjectType [] , work : WorkType []}) {
  return (
    <div className="w-full ">
      <div className="bg-white p-3 rounded-xl shadow-md mt-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold ms-2">Experience</h1>

          <Dialog>
            <DialogTrigger asChild>
              <button className=" text-zinc-700 p-2 rounded-full hover:bg-zinc-100">
                <Plus></Plus>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[90%] md:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Add Experince</DialogTitle>
                <DialogDescription>
                    You can add your Experience here 
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-fit md:w-[400px] mx-auto grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
      </TabsList>
      <TabsContent value="work">

      <div className="grid gap-4 py-4">
                
                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                  <label htmlFor="name" className="md:text-right">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Software Engineer"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                  <label htmlFor="name" className="md:text-right">
                    Organisation
                  </label>
                  <input
                    id="name"
                    placeholder="Hackingly"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                    <label htmlFor="" className="md:text-right">Duration</label>
                    <div className="col-span-3 flex gap-2">
                        <DatePicker label="Starting Date"/>
                        <DatePicker label="Ending Date"/>
                    </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                    <label htmlFor="switch" className="md:text-right">Currently working</label>
                    <div className="col-span-3 flex gap-2">
                      <Switch id="switch"/>
                    </div>
                </div>


        </div>

      </TabsContent>
      <TabsContent value="project">

      <div className="grid gap-4 py-4">
                
                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                  <label htmlFor="name" className="max-sm:col-span-3 md:text-right">
                    Project Name
                  </label>
                  <input
                    id="name"
                    placeholder="My Project App"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"/>                
                  </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                  <label htmlFor="name" className="max-sm:col-span-3 md:text-right">
                    Description
                  </label>
                  <textarea
                    id="name"
                    rows={5}
                    placeholder="a breif introduction about the project"
                    className="col-span-3 p-1 px-2 border border-zinc-300 rounded-md outline-none"/>

                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-2 md:gap-4">
                    <label htmlFor="" className="max-sm:col-span-3 md:text-right">Live Link</label>
                    <input
                    id="name"
                    placeholder="https:your-project.vercel.app"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"/>                
                </div>

        </div>

      </TabsContent>
    </Tabs>


                {/* component 1  */}
              
              <DialogFooter>
                <button className="bg-green-600 text-white p-1 rounded-full px-3 " type="submit">Save</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <h3 className="text-xl font-medium mt-4 ms-2">Work</h3>

        {
            work?.map( (item : WorkType ) => {
                return <div key={item.id} className="p-2 flex mt-2">
                <p className="h-10 mt-1 w-10 rounded-full flex place-items-center justify-center text-white font-medium text-2xl bg-zinc-800">
                  {item.organisation.charAt(0)}
                </p>
                <div className="flex justify-between w-full items-center">
                  <div className="ms-2">
                    <h2 className="text-lg font-medium">{item.organisation}</h2>
                    <h4 className="text-sm text-zinc-600">{item.name}</h4>
                  </div>
                  <p className=" text-xs md:text-sm text-zinc-500 font-medium">
                    { formatDate( item.startingDate ) }
                  </p>
                </div>
              </div>
            })
        }

        <div className="mt-8 ms-2">
        <h3 className="text-xl font-semibold">Projects</h3>
        {
            projects.map(( item : ProjectType ) => {
                return <div key={item.id} className="md:p-2 mt-2 max-sm:pb-4 border-b w-full flex flex-col md:flex-row justify-between items-start">
                <div className="md:w-3/4">
                  <h2 className="text-lg font-medium md:list-item md:list-inside"> {item.name} </h2>
                  <p className="pb-3 mt-2 text-balance md:ms-6">
                    { item.description}
                  </p>
                </div>
                <Link
                  className="bg-green-200/40 text-green-500 text-sm font-semibold p-1 rounded-full px-3"
                  href=""
                >Live Preview</Link>
              </div>
            })
        }     
          
        </div>
      </div>
    </div>
  );
}
