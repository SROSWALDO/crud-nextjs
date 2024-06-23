import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // const res = fetch('http://localhost:3000/api/tasks')
  // cont data = (await res).json()

  const tasks = await prisma.task.findMany()
  return tasks;
}

export default async function Home() {

  const tasks = await loadTasks();
  return (
    <div className="" >
     {tasks.map(task => (
      <TaskCard task={task} key={task.id} />
     ))}
    </div>
  );
}
