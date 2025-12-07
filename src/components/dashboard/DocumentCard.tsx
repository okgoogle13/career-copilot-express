import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2 } from "lucide-react";

interface DocumentCardProps {
  title: string;
  lastUpdated: string;
  type?: string;
}

const getTypeLabel = (type?: string) => {
  switch (type) {
    case "resume":
      return "Resume";
    case "cover-letter":
      return "Cover Letter";
    case "portfolio":
      return "Portfolio";
    case "cv":
      return "CV";
    default:
      return "Document";
  }
};

export const DocumentCard = ({ title, lastUpdated, type }: DocumentCardProps) => {
  return (
    <Card className="bg-surface-container rounded-[28px] border-0 hover:bg-surface-container-high transition-colors duration-200">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Icon in Sage Green Circle */}
        <div className="w-14 h-14 rounded-full bg-[#8BB197]/20 flex items-center justify-center mb-4">
          <FileText className="w-7 h-7 text-[#8BB197]" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <p className="text-xs tracking-wider uppercase text-gray-400">
            {getTypeLabel(type)}
          </p>
          <h3 className="font-heading font-semibold text-white text-lg leading-tight">
            {title}
          </h3>
          <p className="text-xs tracking-wider uppercase text-gray-400">
            Last updated {lastUpdated}
          </p>
        </div>

        {/* Icon-only Actions */}
        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-10 h-10 rounded-full hover:bg-[#8BB197]/20 text-muted-foreground hover:text-[#8BB197]"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="w-10 h-10 rounded-full hover:bg-destructive/20 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
