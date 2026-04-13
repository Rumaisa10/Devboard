export default function StatusBadge({ status }) {
  const variants = {
    "todo": "bg-secondary text-secondary-foreground",
    "in-progress": "bg-blue-100 text-blue-800",
    "done": "bg-green-100 text-green-800",
  }

  const labels = {
    "todo": "Todo",
    "in-progress": "In Progress",
    "done": "Done",
  }

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${variants[status]}`}>
      {labels[status]}
    </span>
  )
}