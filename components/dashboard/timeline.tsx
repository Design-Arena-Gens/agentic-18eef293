import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roadmapMilestones } from "@/lib/data";
import { CalendarClock, Flag } from "lucide-react";

const riskStyles = {
  low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  medium: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  high: "bg-rose-500/10 text-rose-600 dark:text-rose-300"
};

const statusLabel = {
  "on-track": { label: "On Track", variant: "success" },
  "at-risk": { label: "At Risk", variant: "warning" },
  blocked: { label: "Blocked", variant: "danger" }
} as const;

export function Timeline() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Roadmap Alignment
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Strategic commitments through Q4
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <CalendarClock className="size-3" aria-hidden />
          Next planning cycle Aug 3
        </Badge>
      </div>

      <div className="relative flex flex-col gap-6">
        <span className="absolute left-4 top-2 bottom-6 w-px bg-gradient-to-b from-brand-500 via-slate-200 to-transparent dark:via-slate-800" />

        {roadmapMilestones.map((event) => (
          <div key={event.id} className="relative flex gap-6 pl-12">
            <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
              <Flag className="size-4" aria-hidden />
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {event.title}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Stewarded by {event.owner}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={statusLabel[event.status].variant}
                    className="flex items-center gap-1"
                  >
                    {statusLabel[event.status].label}
                  </Badge>
                  <span className="rounded-full px-3 py-1 text-xs font-medium">
                    {new Date(event.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span
                  className={`rounded-full px-3 py-1 font-medium ${riskStyles[event.risk]}`}
                >
                  Risk profile · {event.risk.toUpperCase()}
                </span>
                <span className="text-slate-400">
                  Check-ins every Thursday
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
