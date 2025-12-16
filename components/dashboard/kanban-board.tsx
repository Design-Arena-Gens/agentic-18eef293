import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { kanbanColumns, tasks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Clock, User } from "lucide-react";

const priorityColor = {
  high: "text-rose-500",
  medium: "text-amber-500",
  low: "text-slate-400"
};

export function KanbanBoard() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Execution Flow
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Track delivery velocity and see blockers before they escalate.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">WIP limit 8</Badge>
          <Badge>Active Sprint: Stabilization</Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(kanbanColumns).map(([key, column]) => (
          <div key={key} className="flex flex-col gap-3">
            <div
              className={cn(
                "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400",
                column.accent
              )}
            >
              {column.title}
              <span className="rounded-full bg-white px-2 py-0.5 text-xs text-slate-500 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                {tasks.filter((task) => task.status === key).length}/{column.capacity}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {tasks
                .filter((task) => task.status === key)
                .map((task) => (
                  <div
                    key={task.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-400">
                      {task.id}
                      <span className={cn("flex items-center gap-1", priorityColor[task.priority])}>
                        <span className="size-2 rounded-full bg-current" />
                        {task.priority.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {task.title}
                    </div>
                    <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                      {task.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        {task.assignees.map((person) => (
                          <span
                            key={person}
                            className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                          >
                            <User className="size-3" aria-hidden />
                            {person}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3 text-slate-400" aria-hidden />
                        {task.etaDays}d
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {task.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
