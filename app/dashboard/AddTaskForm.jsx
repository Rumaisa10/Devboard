'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateTask } from "../lib/action";

export default function AddTaskForm() {
  const[formData,setFormData] = useState({
    title:'',
    status:'todo',
    priority :'medium'
  })
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

   await CreateTask(formData)
    setFormData({ title: "", status: "todo", priority: "medium" })
    setLoading(false)
    router.refresh() 
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
      <input
        type="text"
        placeholder="Task title..."
        value={formData.title}
        onChange={(e) => setFormData({...formData,title:e.target.value})}
        className="border rounded-lg p-2 bg-background"
      />

      <div className="flex gap-3">
        <select
          value={formData.status}
          onChange={(e) => setFormData({...formData,status:e.target.value})}
          className="border rounded-lg p-2 bg-background"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select
          value={formData.priority}
          onChange={(e) => setFormData({...formData,priority:e.target.value})}
          className="border rounded-lg p-2 bg-background"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </div>
    </form>
  );
}
