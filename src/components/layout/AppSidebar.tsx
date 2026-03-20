import { Link, useLocation } from "react-router-dom";
import { Cloud, Home, Grid3X3, Wrench, GitCompare, BarChart3, Code, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "Categories", icon: Grid3X3, path: "/categories" },
  { label: "AI Tools", icon: Wrench, path: "/tools" },
  { label: "Comparisons", icon: GitCompare, path: "/comparisons" },
  { label: "Insights", icon: BarChart3, path: "/insights" },
  { label: "API Guide", icon: Code, path: "/api-guide" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const AppSidebar = ({ collapsed, onToggle }: AppSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "h-screen border-r border-border bg-card/50 backdrop-blur-xl flex flex-col flex-shrink-0 transition-all duration-300 sticky top-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="h-14 border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <Cloud className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={1.5} />
          {!collapsed && <span className="text-sm font-bold text-foreground whitespace-nowrap">AI Universe</span>}
        </div>
        <button onClick={onToggle} className="text-muted-foreground hover:text-foreground flex-shrink-0">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogOut className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
          {!collapsed && <span>Back to Home</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AppSidebar;
