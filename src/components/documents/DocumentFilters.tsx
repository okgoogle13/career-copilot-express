import { Input } from "@/components/ui/input";
import { Search, FileText, FolderOpen, Clock, ArrowUpAZ, ArrowDownAZ } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  documentType: string;
  onTypeChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const typeFilters = [
  { value: "all", label: "All Types", icon: FolderOpen },
  { value: "resume", label: "Resume", icon: FileText },
  { value: "cover-letter", label: "Cover Letter", icon: FileText },
  { value: "portfolio", label: "Portfolio", icon: FileText },
  { value: "cv", label: "CV", icon: FileText },
];

const sortOptions = [
  { value: "recent", label: "Recent", icon: Clock },
  { value: "name-asc", label: "A-Z", icon: ArrowUpAZ },
  { value: "name-desc", label: "Z-A", icon: ArrowDownAZ },
];

export const DocumentFilters = ({
  searchQuery,
  onSearchChange,
  documentType,
  onTypeChange,
  sortBy,
  onSortChange,
}: DocumentFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search Bar - Sage Green Pill */}
      <div className="relative flex-1 min-w-[280px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8BB197]" />
        <Input
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 h-12 rounded-full bg-surface-container-low border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-[#8BB197]/50"
        />
      </div>

      {/* Type Filter Chips */}
      <div className="flex items-center gap-2">
        {typeFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onTypeChange(filter.value)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
              documentType === filter.value
                ? "bg-[#8BB197] text-[#1A1625]"
                : "bg-surface-container-low text-muted-foreground hover:bg-surface-container hover:text-foreground"
            )}
          >
            <filter.icon className="w-4 h-4" />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-border/50" />

      {/* Sort Chips */}
      <div className="flex items-center gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
              sortBy === option.value
                ? "bg-[#8BB197] text-[#1A1625]"
                : "bg-surface-container-low text-muted-foreground hover:bg-surface-container hover:text-foreground"
            )}
          >
            <option.icon className="w-4 h-4" />
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
