import { LayoutDashboard, FileText, Briefcase, Send, BarChart3 } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Documents", icon: FileText, path: "/documents" },
  { title: "Opportunities", icon: Briefcase, path: "/opportunities" },
  { title: "Applications", icon: Send, path: "/applications" },
  { title: "Analysis", icon: BarChart3, path: "/analysis" },
];

export const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-surface-container border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-heading font-semibold text-primary">
          Angry Unicorn
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground transition-all hover:bg-muted/50"
                  activeClassName="bg-muted text-primary font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
