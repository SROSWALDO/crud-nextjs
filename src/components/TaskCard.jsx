"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function TaskCard({ task }) {
  const router = useRouter();
  
  const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date(task.createdAt));

  return (
    <div
      className="bg-slate-900 block hover:bg-slate-800 hover:cursor-pointer m-5 w-[200px]"
      onClick={() => { router.push('/tasks/edit/' + task.id); }}
    >
      <h3 className='font-bold text-lg ' >{task.title}</h3>
      <p>{task.description}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
