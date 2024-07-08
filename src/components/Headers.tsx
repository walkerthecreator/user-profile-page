"use client"
import Link from "next/link";
import axios from "axios"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Figma, Github, Instagram, Linkedin, LinkedinIcon, Twitter, Youtube } from "lucide-react";
import { useState } from "react";



interface linksType {
  id : number ,
  userId : number ,
  github : string ,
  linkedin : string ,
  instagram : string ,
  figma : string ,
  twitter : string  ,
  youtube : string
}

interface UserType {
    id : number ,
    name : string ,
    banner : string ,
    profile : string ,
    email : string  
}

 function Header({ links , user } : {links : linksType , user : UserType} ) {
  const keys = Object.keys(links).filter( item => item !== "id" && item !== 'userId' ) as Array<keyof Omit<linksType, 'id' | 'userId'>>;
  const [ metaLinks , setMetaLinks ] = useState<linksType>(links) 

  function handleChange( e : React.ChangeEvent<HTMLInputElement> ){
    const { name , value } = e.target
    setMetaLinks( (prev) => ({ ...prev , [name] : value }))
  }

  async function submitChanges(){
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/user/${user.id}` , {...links})
  }

  const [file, setFile] = useState<any>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e :  React.ChangeEvent<HTMLInputElement> ) => {
    setFile(e.target.files![0]);
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http:localhost:3000/api/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading file');
      console.error('Upload error:', error);
    }
  };


  return (
    <div className="pt-10 text-black flex gap-3">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="https://placehold.co/700x200"
          alt="banner-img"
        />
        <div className="p-3 relative -top-12">
          <div className="flex justify-between items-center">
          <img
            className="rounded-3xl ring-2 ring-white"
            src="https://placehold.co/50"
            width={128}
            alt="user-profile"
          />

          <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-zinc-800 rounded-full p-1 px-3 text-white">Upload Photo</button>
                </DialogTrigger>
                <DialogContent className="max-w-[90%] md:max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>Upload Profile or Banner Photo</DialogTitle>
                    <DialogDescription>
                      Adding Profile or User profile Picture make better Impressio. 
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">

                      <form onSubmit={handleSubmit}>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button type="submit">Upload</button>
                      </form>
                    </div>
                    </div>


                    </div>
                    <DialogFooter>
                    <button className="bg-green-600 p-1 rounded-full px-3 text-white" type="submit">Save</button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>





            </div>
          <div className="flex items-center mt-4">
            <h1 className="text-3xl font-medium">{user.name}</h1>
            <h3 className="font-medium text-sm text-zinc-400 ms-4">
              { user.email }
            </h3>
          </div>

          {/* socials */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-2 mt-3 w-full mb-4 md:w-3/4 flex-wrap">
            {
              keys.map((item  , index : number) => {
                return <Link
                key={index}
                className="border border-zinc-200 max-sm:flex-grow text-center shadow-sm p-1 px-3 rounded-md"
                href={links[item] } 
              >
                { keys[index].charAt(0).toUpperCase() + keys[index].substring(1) }
              </Link>
              } )
            }
            </div>
            <div className="md:me-3 max-sm:w-full">

              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-zinc-800 rounded-full max-sm:w-full p-1 px-3 text-white">Add Links</button>
                </DialogTrigger>
                <DialogContent className="max-w-[90%] md:max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>Add Your Social Links</DialogTitle>
                    <DialogDescription>
                      Adding more social links will help user to get access to you easily. 
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4">
                        <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">

                      <label htmlFor="name" className="text-right">
                        <Github size={18}/>
                      </label>
                      <input
                        name="github"
                        placeholder="https://github.com/"
                        value={metaLinks.github}
                        onChange={handleChange}
                        className="outline-none w-full"
                      />
                    </div>

                    <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">
                          <label htmlFor="name" className="text-right">
                              <Figma size={18}/>
                          </label>
                          <input
                            name="figma"
                            placeholder="https://figma.com/"
                            value={metaLinks.figma}
                            onChange={handleChange}
                            className="outline-none w-full"
                          />
                    </div>

                    <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">
                          <label htmlFor="name" className="text-right">
                              <LinkedinIcon size={18}/>
                          </label>
                          <input
                            name="linkedin"
                            placeholder="https://linkedin.com/"
                            value={metaLinks.linkedin}
                            onChange={handleChange}
                            className="outline-none w-full"
                          />
                    </div>

                    <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">
                          <label htmlFor="name" className="text-right">
                              <Twitter
                               size={18}/>
                          </label>
                          <input
                            name="twitter"
                            placeholder="https://x.com/"
                            value={metaLinks.twitter}
                            onChange={handleChange}
                            className="outline-none w-full"
                          />
                    </div>

                    <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">
                          <label htmlFor="name" className="text-right">
                            <Instagram size={18}/>
                          </label>
                          <input
                            name="instagram"
                            placeholder="https://instagram.com/"
                            value={metaLinks.instagram}
                            onChange={handleChange}
                            className="outline-none w-full"
                          />
                      </div>
                    <div className="col-span-2 flex rounded shadow gap-2 items-center border border-zinc-300 p-1">
                          <label htmlFor="name" className="text-right">
                              <Youtube size={18}/>
                          </label>
                          <input
                            name="youtube"
                            placeholder="https://youtube.com/"
                            value={metaLinks.youtube}
                            onChange={handleChange}
                            className="outline-none w-full"
                          />
                      </div>


                    </div>
                  </div>
                  <DialogFooter>
                    <button className="bg-green-600 p-1 rounded-full px-3 text-white" type="submit">Save</button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
