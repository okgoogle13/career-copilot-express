import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  initials: string;
  name: string;
  role: string;
  atsScore: number;
  applications: number;
  potential: number;
}

export const ProfileCard = ({ 
  initials, 
  name, 
  role, 
  atsScore, 
  applications, 
  potential 
}: ProfileCardProps) => {
  return (
    <Card className="bg-tertiary">
      <CardHeader className="space-y-4">
        {/* Avatar and Identity */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-tertiary-foreground/20 text-tertiary-foreground font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-tertiary-foreground">
              {name}
            </h3>
            <p className="text-sm font-body text-tertiary-foreground/70">
              {role}
            </p>
          </div>
        </div>

        {/* ATS Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-body text-tertiary-foreground/70">ATS Score</span>
            <span className="text-sm font-body font-semibold text-tertiary-foreground">{atsScore}%</span>
          </div>
          <Progress value={atsScore} className="h-2 bg-tertiary-foreground/20" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Stat Boxes */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-tertiary-foreground/10 rounded-xl p-3 border border-tertiary-foreground/20">
            <p className="text-xs font-body text-tertiary-foreground/70 mb-1">Applications</p>
            <p className="text-2xl font-heading font-semibold text-tertiary-foreground">{applications}</p>
          </div>
          <div className="bg-tertiary-foreground/10 rounded-xl p-3 border border-tertiary-foreground/20">
            <p className="text-xs font-body text-tertiary-foreground/70 mb-1">Potential</p>
            <p className="text-2xl font-heading font-semibold text-tertiary-foreground">{potential}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button variant="ghost" className="flex-1 text-tertiary-foreground hover:bg-tertiary-foreground/10">Edit</Button>
        <Button variant="ghost" className="flex-1 text-tertiary-foreground hover:bg-tertiary-foreground/10">Delete</Button>
      </CardFooter>
    </Card>
  );
};
