"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Dashboard", icon: "▦" },
  { href: "/board", label: "Task Board", icon: "⬡" },
  { href: "/projects", label: "Projects", icon: "◈" },
  { href: "/team", label: "Team", icon: "◎" },
];

export function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="px-5 py-5 border-b border-gray-100">
        <span className="text-lg font-bold text-indigo-600">TaskFlow</span>
        <p className="text-xs text-gray-400 mt-0.5">Team task manager</p>
      </div>
      <nav className="flex-1 p-3 space-y-0.5">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              path === item.href
                ? "bg-indigo-50 text-indigo-700 font-medium"
                : "text-gray-600 hover:bg-gray-100",
            ].join(" ")}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
            S
          </div>
          <div>
            <p className="text-xs font-medium">Sam</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
