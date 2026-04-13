import getTasks from "../lib/queries/tasks";

import React from 'react'
import AddTaskForm from "./AddTaskForm";

export default async function DashBoardPage() {
  const tasks = await getTasks()
  return (
    <div>
      <main className="p-8">
      <h1 className="text-2xl font-medium mb-6">My Tasks</h1>
      <AddTaskForm></AddTaskForm>

      {tasks.length === 0 ? (
        <p className="text-muted-foreground">No tasks yet. Add one!</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {tasks.map((task) => (
            <li
              key={task._id.toString()}
              className="p-4 rounded-lg border bg-card"
            >
              <p className="font-medium">{task.title}</p>
              <div className="flex gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{task.status}</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{task.priority}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
    </div>
  )
}
