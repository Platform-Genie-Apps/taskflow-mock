import { Sidebar } from "@/components/Sidebar";

const projects = [
  { name: "Website Redesign", description: "Refreshing the public-facing site", tasks: 12, done: 7, color: "bg-violet-500", members: ["A", "S", "J"] },
  { name: "Mobile App", description: "iOS and Android task manager app", tasks: 8, done: 2, color: "bg-blue-500", members: ["J", "T"] },
  { name: "Backend API", description: "RESTful API and database layer", tasks: 15, done: 11, color: "bg-emerald-500", members: ["S", "J"] },
  { name: "Legal", description: "Compliance and policy documents", tasks: 3, done: 0, color: "bg-orange-500", members: ["T"] },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Projects</h1>
              <p className="text-gray-500 text-sm mt-1">{projects.length} active projects</p>
            </div>
            <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg">+ New Project</button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {projects.map((p) => {
              const pct = Math.round((p.done / p.tasks) * 100);
              return (
                <div key={p.name} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-indigo-200 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className={["w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg", p.color].join(" ")}>
                      {p.name[0]}
                    </div>
                    <div className="flex -space-x-1.5">
                      {p.members.map((m, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-indigo-600 text-xs font-bold">
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5 mb-4">{p.description}</p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{p.done} of {p.tasks} tasks</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
