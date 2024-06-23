"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Newpage({params}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setTitle(data.title)
      setDescription(data.description)
    })
    }

  }, [])

  const router = useRouter()

  const  onSubmit = async (event) => {
    event.preventDefault();
    // const title = event.target.title.value;
    // const description = event.target.description.value;

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json();


    } else {
      const res = await fetch('/api/tasks',{
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      const data = await res.json();
    }
    router.refresh()
    router.push("/");
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      
      <form onSubmit={onSubmit} className='bg-slate-700 p-8 w-[520px] ' action="">
        <h1 className='text-center mb-4 text-xl font-bold ' >Create Task</h1>

        <label className='mb-2' htmlFor="title">Title of task</label>
        <input id='title' type="text" className='border mb-3 p-2 border-gray-400 w-full text-black' placeholder='Title' onChange={(e) => setTitle(e.target.value) } value={title} />
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" cols="30" rows="3" className='border border-gray-400 w-full px-2 text-black' placeholder='Describe your task' onChange={(e) => setDescription(e.target.description) } value={description} ></textarea>
        <button className=' bg-blue-500 hover:bg-blue-700 transition-all text white font-bold py-2 px-4 rounded-md  ' >Crear</button>
      </form>
    </div>
  );
}