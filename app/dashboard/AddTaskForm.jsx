'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTaskForm() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, status, priority }),
    });
    setTitle("");
    setStatus("todo");
    setPriority("medium");
    setLoading(false);
    router.refresh() 
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg p-2 bg-background"
      />

      <div className="flex gap-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2 bg-background"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
