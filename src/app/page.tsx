import { Sidebar } from "@/components/Sidebar";

const stats = [
  { label: "Total Tasks", value: "24", change: "+3 this week", color: "text-indigo-600" },
  { label: "Done Today", value: "8", change: "Great progress!", color: "text-green-600" },
  { label: "Overdue", value: "3", change: "Needs attention", color: "text-red-500" },
];

const myTasks = [
  { title: "Design the onboarding flow", project: "Website Redesign", priority: "HIGH", due: "Today" },
  { title: "Fix login page bug", project: "Mobile App", priority: "HIGH", due: "Today" },
  { title: "Write API documentation", project: "Backend API", priority: "MEDIUM", due: "Tomorrow" },
  { title: "Review pull request #42", project: "Mobile App", priority: "LOW", due: "This week" },
  { title: "Update team Notion page", project: "Internal", priority: "LOW", due: "This week" },
];

const activity = [
  { user: "Jordan", action: "completed", task: "Set up CI/CD pipeline", time: "2m ago" },
  { user: "Alex", action: "created", task: "Redesign settings page", time: "18m ago" },
  { user: "Sam", action: "moved", task: "User authentication", time: "1h ago" },
  { user: "Taylor", action: "commented on", task: "Fix mobile nav bug", time: "2h ago" },
];

const priorityColor: Record<string, string> = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  LOW: "bg-gray-100 text-gray-600",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Good morning, Sam!</h1>
            <p className="text-gray-500 text-sm mt-1">Here&apos;s what&apos;s happening with your team today.</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={["text-4xl font-bold mt-1", s.color].join(" ")}>{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-sm">My Tasks</h2>
                <span className="text-xs text-gray-400">{myTasks.length} tasks</span>
              </div>
              <ul className="divide-y divide-gray-50">
                {myTasks.map((t, i) => (
                  <li key={i} className="px-5 py-3 flex items-start justify-between gap-3 hover:bg-gray-50">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{t.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{t.project}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={["text-xs px-1.5 py-0.5 rounded-full font-medium", priorityColor[t.priority]].join(" ")}>
                        {t.priority}
                      </span>
                      <span className="text-xs text-gray-400">{t.due}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-sm">Recent Activity</h2>
              </div>
              <ul className="divide-y divide-gray-50">
                {activity.map((a, i) => (
                  <li key={i} className="px-5 py-3.5">
                    <p className="text-sm">
                      <span className="font-medium">{a.user}</span>{" "}
                      <span className="text-gray-500">{a.action}</span>{" "}
                      <span className="font-medium">{a.task}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
