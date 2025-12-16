import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { pipelineStages } from "@/lib/data";
import { ServerCog } from "lucide-react";

export function DevOpsPipeline() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Delivery Pipeline
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            DevOps signal across train
          </p>
        </div>
        <div className="flex size-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
          <ServerCog className="size-4" aria-hidden />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {pipelineStages.map((stage) => (
          <div
            key={stage.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100">
              {stage.name}
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {stage.stats}
              </span>
            </div>
            <Progress value={stage.completion} className="my-3 h-1.5" />
            <p className="text-xs text-slate-500 dark:text-slate-400">{stage.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
