import { Sidebar } from "@/components/Sidebar";

const members = [
  { name: "Sam Garcia", email: "sam@team.co", role: "Admin", tasks: 8, joined: "Feb 2025" },
  { name: "Alex Chen", email: "alex@team.co", role: "Member", tasks: 5, joined: "Mar 2025" },
  { name: "Jordan Lee", email: "jordan@team.co", role: "Member", tasks: 6, joined: "Mar 2025" },
  { name: "Taylor Kim", email: "taylor@team.co", role: "Member", tasks: 3, joined: "Apr 2025" },
];

export default function TeamPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Team</h1>
              <p className="text-gray-500 text-sm mt-1">{members.length} members</p>
            </div>
            <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg">+ Invite Member</button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500">Member</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500">Role</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500">Tasks</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {members.map((m) => (
                  <tr key={m.email} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                          {m.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{m.name}</p>
                          <p className="text-xs text-gray-400">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={["text-xs px-2 py-0.5 rounded-full font-medium", m.role === "Admin" ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-600"].join(" ")}>
                        {m.role}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{m.tasks}</td>
                    <td className="px-5 py-4 text-sm text-gray-400">{m.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
