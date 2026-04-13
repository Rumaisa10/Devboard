"use client"

import {DeleteTask} from "../lib/action"
import { useState } from "react"

export default function DeleteButton({ taskId }) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    setLoading(true)
    await DeleteTask(taskId)
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-destructive hover:underline disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  )
}