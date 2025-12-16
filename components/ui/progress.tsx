import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div
      className={cn(
        "h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      {...props}
    >
      <div
        style={{ width: `${value}%` }}
        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 transition-all"
      />
    </div>
  );
}
