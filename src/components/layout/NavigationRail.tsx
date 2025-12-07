import { LayoutDashboard, FileText, Briefcase, Send, BarChart3, Plus } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import unicornLogo from "@/assets/unicorn-logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Documents", icon: FileText, path: "/documents" },
  { title: "Opportunities", icon: Briefcase, path: "/opportunities" },
  { title: "Applications", icon: Send, path: "/applications" },
  { title: "Analysis", icon: BarChart3, path: "/analysis" },
];

export const NavigationRail = () => {
  return (
    <aside className="w-[88px] bg-surface-container-low flex flex-col items-center py-6 rounded-[28px] m-3 mr-0">
      {/* Logo - Circular masked unicorn */}
      <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center mb-6">
        <img
          src={unicornLogo}
          alt="Career Copilot"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* FAB - Create Action */}
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 mb-8 shadow-none"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Navigation Icons */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className="w-14 h-14 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-surface-container-high hover:text-foreground"
              activeClassName="bg-sage-green text-sage-green-foreground"
            >
              <Icon className="w-6 h-6" />
            </NavLink>
          );
        })}
      </nav>

      {/* Avatar placeholder at bottom */}
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mt-auto">
        <span className="text-sm font-medium text-foreground">N</span>
      </div>
    </aside>
  );
};
