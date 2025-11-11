import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "Completed 'Interview Masterclass'",
    description: "Received 100th Connection",
  },
];

export const RecentAchievementsCard = () => {
  return (
    <Card className="bg-surface-container border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-heading text-foreground">
            Recent Achievements
          </CardTitle>
          <span className="text-xs text-muted-foreground">16pr</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-2">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-body text-foreground">
                {achievement.title}
              </p>
              <p className="text-xs font-body text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
