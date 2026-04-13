'use client'
import { UpdateTask } from "../lib/action";
import { useState } from "react";

import React from 'react'

export default function EditTaskForm({taskId}) {
    const [formData,setFormData] = useState({
        title : taskId.title,
        status : taskId.status,
        priority: taskId.priority
    })
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    
    async function handleUpdate() {
    setLoading(true)
    await UpdateTask(taskId, formData)
    setLoading(false)
    setEditing(false)
  }
     if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="text-sm text-muted-foreground hover:underline"
      >
        Edit
      </button>
    )
  }
  return (
      <div className="flex flex-col gap-2 mt-3">
      <input
        type="text"
        value={formData.title}
        
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border rounded-lg p-2 bg-background text-sm"
      />

      <div className="flex gap-2">
        <select
          value={formData.status}
          
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="border rounded-lg p-2 bg-background text-sm"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select
          value={formData.priority}
          
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          className="border rounded-lg p-2 bg-background text-sm"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-lg"
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() => setEditing(false)}
          className="text-sm text-muted-foreground hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
