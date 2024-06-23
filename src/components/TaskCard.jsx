"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TaskCard({task}) {

    const router = useRouter()

  return (
    <div className="bg-slate-900 block hover:bg-slate-800 hover:cursor-pointer m-5 w-[200px]" onClick={() => { router.push('/tasks/edit/' + task.id ) } }  >
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{ new Date(task.createdAt).toLocaleDateString() }</p>
      </div>
  )
}
