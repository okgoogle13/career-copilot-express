import { ReactNode } from "react";
import { NavigationRail } from "./NavigationRail";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <NavigationRail />
      {/* Main content with M3 24dp margins */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};
