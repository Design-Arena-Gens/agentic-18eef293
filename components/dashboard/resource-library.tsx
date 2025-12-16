import { Card } from "@/components/ui/card";
import { documents } from "@/lib/data";
import { Download } from "lucide-react";
import Link from "next/link";

export function ResourceLibrary() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Knowledge Hub
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Decision memos & operating docs
          </p>
        </div>
        <Link
          href="#"
          className="text-xs font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-300"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-sm dark:bg-slate-900">
              {doc.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {doc.title}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {doc.owner} • {doc.category}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs text-slate-400">
              <span>Updated {doc.updatedAt}</span>
              <button
                type="button"
                className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500"
              >
                <Download className="size-3" aria-hidden />
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
