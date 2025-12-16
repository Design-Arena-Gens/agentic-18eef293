import { DevOpsPipeline } from "@/components/dashboard/devops-pipeline";
import { KanbanBoard } from "@/components/dashboard/kanban-board";
import { OverviewCards } from "@/components/dashboard/overview-cards";
import { ResourceLibrary } from "@/components/dashboard/resource-library";
import { TeamStatus } from "@/components/dashboard/team-status";
import { Timeline } from "@/components/dashboard/timeline";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-6 bg-slate-50 p-6 dark:bg-slate-950">
      <OverviewCards />
      <section className="grid gap-6 xl:grid-cols-3">
        <KanbanBoard />
        <div className="flex flex-col gap-6">
          <Timeline />
          <div className="grid gap-6 lg:grid-cols-2">
            <DevOpsPipeline />
            <TeamStatus />
            <ResourceLibrary />
          </div>
        </div>
      </section>
    </main>
  );
}
