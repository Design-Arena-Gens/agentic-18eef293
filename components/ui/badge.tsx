import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "warning" | "danger";
}

const badgeStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/20 dark:text-brand-300",
  outline:
    "text-slate-600 ring-1 ring-inset ring-slate-200 dark:text-slate-300 dark:ring-slate-700",
  success:
    "bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/30",
  warning:
    "bg-amber-500/10 text-amber-600 ring-1 ring-inset ring-amber-500/30",
  danger: "bg-rose-500/10 text-rose-600 ring-1 ring-inset ring-rose-500/30"
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeStyles[variant],
        className
      )}
      {...props}
    />
  );
}
