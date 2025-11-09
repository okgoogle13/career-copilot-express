import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const tabs = [
  { title: "Dashboard", path: "/" },
  { title: "Documents", path: "/documents" },
  { title: "Opportunities", path: "/opportunities" },
  { title: "Applications", path: "/applications" },
  { title: "Analysis", path: "/analysis" },
];

export const TabBar = () => {
  return (
    <div className="border-b border-border bg-background">
      <nav className="flex gap-8 px-8">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className="py-4 text-muted-foreground transition-colors hover:text-foreground relative"
            activeClassName="text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
