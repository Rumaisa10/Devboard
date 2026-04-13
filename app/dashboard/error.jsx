"use client" // error boundaries must be client components

import { useEffect } from "react"

export default function DashboardError({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="p-8">
      <div className="border border-destructive rounded-lg p-6 flex flex-col gap-3">
        <h2 className="text-lg font-medium text-destructive">
          Something went wrong
        </h2>
        <p className="text-sm text-muted-foreground">
          {error.message || "Failed to load tasks"}
        </p>
        <button
          onClick={reset}
          className="self-start bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm"
        >
          Try again
        </button>
      </div>
    </main>
  )
}