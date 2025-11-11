import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Briefcase } from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "Updated Resume",
    description: "(5m ago) Senior Software Engineer",
  },
  {
    icon: Briefcase,
    title: "Applied for 'UX Designer'",
    description: "(2h ago)",
  },
];

export const RecentActivityCard = () => {
  return (
    <Card className="bg-surface-container border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-heading text-foreground">
            Recent Activity
          </CardTitle>
          <span className="text-xs text-muted-foreground">16pr</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="rounded-full bg-primary/20 p-2">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-body text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
