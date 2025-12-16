import "./globals.css";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { AppThemeProvider } from "@/components/theme/theme-provider";
import { ReactNode } from "react";

export const metadata = {
  title: "NovaWorks Program Office",
  description: "Strategic hub for orchestrating product delivery with clarity and confidence."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        <AppThemeProvider>
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Topbar />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
