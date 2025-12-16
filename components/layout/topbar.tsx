import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Bell, Command, Search, Sparkles, Wifi } from "lucide-react";

const online = true;

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative hidden md:block">
          <input
            className="h-10 w-72 rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-500"
            placeholder="Search initiatives, people, docs…"
          />
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-400 dark:border-slate-700 dark:bg-slate-900">
            <Command className="size-3" aria-hidden />
            K
          </span>
        </div>
        <Badge variant="outline" className="hidden md:inline-flex items-center gap-2">
          <Sparkles className="size-3 text-brand-500" aria-hidden />
          Sprint retro in 2h • add insights
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold shadow-subtle transition dark:border-slate-800",
            online
              ? "border-emerald-200 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
              : "border-rose-200 bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300"
          )}
        >
          <Wifi className="size-3.5" aria-hidden />
          {online ? "All systems operational" : "Incident in progress"}
        </div>
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700"
        >
          <Bell className="size-4" aria-hidden />
        </button>
        <ThemeToggle />
        <div className="flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow-subtle dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 text-xs font-bold text-white shadow-lg shadow-brand-500/30">
            MK
          </span>
          Maia Kane
        </div>
      </div>
    </header>
  );
}
