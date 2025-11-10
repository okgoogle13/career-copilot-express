import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface DocumentCardProps {
  title: string;
  lastUpdated: string;
}

export const DocumentCard = ({ title, lastUpdated }: DocumentCardProps) => {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <FileText className="w-6 h-6 text-primary" />
        <div className="space-y-1">
          <h3 className="font-heading font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm font-body text-muted-foreground">
            {lastUpdated}
          </p>
        </div>
      </CardHeader>

      <CardFooter className="gap-2">
        <Button variant="ghost" className="flex-1">Edit</Button>
        <Button variant="ghost" className="flex-1 text-destructive hover:text-destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
};
