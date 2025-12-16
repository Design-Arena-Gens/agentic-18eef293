import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { initiatives, projectMetrics } from "@/lib/data";
import { ArrowDownRight, ArrowUpRight, Minus, Users } from "lucide-react";

const trendIcon = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: Minus
};

export function OverviewCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {projectMetrics.map((metric) => {
        const Icon = trendIcon[metric.trend as keyof typeof trendIcon];
        const isNeutral = metric.trend === "neutral";
        return (
          <Card key={metric.label} className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
              {metric.label}
              <Badge
                variant={metric.trend === "down" ? "danger" : metric.trend === "up" ? "success" : "outline"}
              >
                <Icon className="mr-1 inline size-3" aria-hidden />
                {metric.change}
              </Badge>
            </div>
            <div className="text-3xl font-semibold text-slate-900 dark:text-white">
              {metric.value}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{metric.description}</p>
          </Card>
        );
      })}
      <Card className="col-span-full flex flex-col gap-6 xl:col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Strategic Initiatives
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Focus on completion this quarter
            </p>
          </div>
          <Badge className="flex items-center gap-1">
            <Users className="size-3" aria-hidden />
            Portfolio Sync
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {initiatives.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                {item.title}
              </div>
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{item.owner}</p>
              <Progress value={item.progress} className="mb-3 h-1.5" />
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{item.progress}% complete</span>
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {item.focus}
                </span>
              </div>
              <div className="mt-3 text-[11px] text-slate-400">
                Dependencies: {item.dependencies.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
