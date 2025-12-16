import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Activity, Dot, SignalHigh } from "lucide-react";

export function TeamStatus() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Team Focus
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Availability & workload signals
          </p>
        </div>
        <div className="flex size-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
          <Activity className="size-4" aria-hidden />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
              {member.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {member.name}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {member.role}
                  </p>
                </div>
                <Badge
                  variant={member.available ? "success" : "danger"}
                  className="flex items-center gap-1"
                >
                  <Dot className="size-4" aria-hidden />
                  {member.available ? "Open" : "At capacity"}
                </Badge>
              </div>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                {member.focus}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <SignalHigh className="size-3" aria-hidden />
                  Load
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1",
                    member.load > 80
                      ? "bg-rose-500/10 text-rose-600"
                      : member.load > 60
                        ? "bg-amber-500/10 text-amber-600"
                        : "bg-emerald-500/10 text-emerald-600"
                  )}
                >
                  {member.load}% allocated
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
