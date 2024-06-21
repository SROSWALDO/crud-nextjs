"use client"

import { useRouter } from "next/navigation";

export default function Newpage() {

  const router = useRouter()

  const  onSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    const res = await fetch('/api/tasks',{
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    router.push("/")


  }

  return (
    <div className='h-screen flex justify-center items-center'>
      
      <form onSubmit={onSubmit} className='bg-slate-700 p-8 w-[520px] ' action="">
        <h1 className='text-center mb-4 text-xl font-bold ' >Create Task</h1>

        <label className='mb-2' htmlFor="title">Title of task</label>
        <input id='title' type="text" className='border mb-3 p-2 border-gray-400 w-full text-black' placeholder='Title' />
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" cols="30" rows="3" className='border border-gray-400 w-full px-2 text-black' placeholder='Describe your task' ></textarea>
        <button className=' bg-blue-500 hover:bg-blue-700 transition-all text white font-bold py-2 px-4 rounded-md  ' >Crear</button>
      </form>
    </div>
  )
}
