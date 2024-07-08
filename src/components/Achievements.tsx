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
import { Plus } from "lucide-react";

interface achivementsType {
  name : string ,
  year : string ,
  organisedBy : string ,
  id : number ,
  userId : number 
}

interface certificateType {
  name : string ,
  year : string ,
  organisation : string , 
  id : number ,
  userId : number 
}

export default function Achivements({ hackathons , certificates } : { hackathons : achivementsType [] , certificates : certificateType [] }){
    return <div className="flex flex-col md:flex-row gap-2 my-2 mb-4">
        <div className="w-full md:w-[50%] p-3 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Hackathons</h1>
                <Dialog>
            <DialogTrigger asChild>
              <button className=" text-zinc-700 p-2 rounded-full hover:bg-zinc-100">
                <Plus></Plus>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Add Your Achievements </DialogTitle>
                <DialogDescription>
                    You can show little why you&apos;re better 
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Hackthon Name"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Organisation
                  </label>
                  <input
                    id="name"
                    placeholder="Organized By"
                    className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="" className="text-right">Year</label>
                    <div className="col-span-3 flex gap-2">
                        <input type="number"
                            id="name"
                            min={1947}
                            max={2024}
                            placeholder="2024"
                            className="col-span-3 p-1 border border-zinc-300 rounded-md outline-none"/>
                    </div>
                </div>

                
              </div>
              <DialogFooter>
                <button className="bg-green-600 text-white p-1 rounded-full px-3 " type="submit">Save</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
            </div>

            {
              hackathons.map((item : achivementsType ) => {
                return <div className="flex justify-between items-start mt-4" key={item.id}>
                  <div className="max-sm:w-[75%]">
                    <h3 className="text-lg font-medium">{ item.name }</h3>
                    <p className="text-zinc-500 text-sm">{ item.organisedBy }</p>
                  </div>
                  <span className="text-zinc-500 text-sm font-medium">{ item.year }</span>
                </div>
              })
            } 

        </div>
        <div className="w-full md:w-[50%] p-3 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-medium">Certificates</h1>
            {
              certificates.map((item : certificateType  ) => {
                return <div key={item.id} className="flex justify-between mt-4">
                <div className="max-sm:w-[75%]">
                  <h3 className="text-lg font-medium">{ item.name }</h3>
                  <p className="text-zinc-500 text-sm">{ item.organisation }</p>
                </div>
                <span className="text-zinc-500 text-sm font-medium">{ item.year }</span>
              </div>
              })
            }
        </div>
    </div>
}

