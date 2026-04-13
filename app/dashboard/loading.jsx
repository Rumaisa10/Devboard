export default function DashboardLoading() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-medium mb-6">My Tasks</h1>

      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-4 rounded-lg border bg-card animate-pulse"
          >
            <div className="h-4 w-48 bg-muted rounded mb-2" />
            <div className="h-3 w-24 bg-muted rounded" />
          </div>
        ))}
      </div>
    </main>
  )
}