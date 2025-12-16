import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Layers, PlusCircle } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="hidden h-full min-w-[240px] flex-col border-r border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-slate-950 lg:flex">
      <Link
        href="#"
        className="mb-8 flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white"
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
          <Layers className="size-5" aria-hidden />
        </span>
        NovaWorks
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              type="button"
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white",
                index === 0 && "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
              )}
            >
              <Icon className="size-4" aria-hidden />
              {item.name}
              {index === 0 && (
                <span className="ml-auto rounded-full bg-brand-500/10 px-3 py-1 text-xs text-brand-600 dark:text-brand-300">
                  Live
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
          Launch a new initiative
        </div>
        <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
          Spin up workspace templates, align goals, and invite collaborators in under a minute.
        </p>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600"
        >
          <PlusCircle className="size-4" aria-hidden />
          Create Program
        </button>
      </div>
    </aside>
  );
}
