import { Sidebar } from "@/components/Sidebar";

const columns = [
  {
    id: "todo",
    label: "To Do",
    color: "bg-gray-100 text-gray-700",
    tasks: [
      { title: "Redesign settings page", project: "Website Redesign", assignee: "A", priority: "MEDIUM" },
      { title: "Write unit tests for auth", project: "Backend API", assignee: "S", priority: "HIGH" },
      { title: "Update privacy policy", project: "Legal", assignee: "T", priority: "LOW" },
    ],
  },
  {
    id: "inprogress",
    label: "In Progress",
    color: "bg-blue-100 text-blue-700",
    tasks: [
      { title: "User authentication flow", project: "Mobile App", assignee: "J", priority: "HIGH" },
      { title: "Set up analytics dashboard", project: "Website Redesign", assignee: "S", priority: "MEDIUM" },
    ],
  },
  {
    id: "done",
    label: "Done",
    color: "bg-green-100 text-green-700",
    tasks: [
      { title: "Set up CI/CD pipeline", project: "Backend API", assignee: "J", priority: "HIGH" },
      { title: "Design system components", project: "Website Redesign", assignee: "A", priority: "MEDIUM" },
    ],
  },
];

const dot: Record<string, string> = {
  HIGH: "bg-red-400",
  MEDIUM: "bg-yellow-400",
  LOW: "bg-gray-300",
};

export default function BoardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Task Board</h1>
              <p className="text-gray-500 text-sm mt-1">8 tasks across all projects</p>
            </div>
            <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg">+ Add Task</button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {columns.map((col) => (
              <div key={col.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <span className={["text-xs font-semibold px-2 py-0.5 rounded-full", col.color].join(" ")}>
                    {col.label}
                  </span>
                  <span className="text-xs text-gray-400">{col.tasks.length}</span>
                </div>
                <div className="p-3 space-y-2.5 min-h-64">
                  {col.tasks.map((task, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 hover:border-indigo-200 cursor-pointer">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="text-sm font-medium leading-snug">{task.title}</p>
                        <span className={["w-2 h-2 rounded-full shrink-0 mt-1", dot[task.priority]].join(" ")} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{task.project}</span>
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
