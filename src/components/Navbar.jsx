import Link from 'next/link'
import React from 'react'

export default function () {
  return (
    <nav className=' bg-slate-900  ' >
        <div className=' w-[1200px] mx-auto flex justify-between items-center ' >
        <h3 className='font-bold py-3' >Next CRUD</h3>
        <div className="flex gap-x-4 text-lg ">
        <Link href="/" >Tasks</Link>
        <Link href="/new" >New</Link>
        <Link href="/" >About</Link>
        </div>
        </div>
    </nav>
  )
}
