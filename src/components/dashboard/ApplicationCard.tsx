import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ApplicationCardProps {
  title: string;
  company: string;
  location: string;
  status: "Applied" | "Interviewing" | "Offer";
  currentStep: "Applied" | "Screening" | "Interview" | "Offer";
}

const steps = ["Applied", "Screening", "Interview", "Offer"];

export const ApplicationCard = ({ 
  title, 
  company, 
  location, 
  status, 
  currentStep 
}: ApplicationCardProps) => {
  const currentStepIndex = steps.indexOf(currentStep);
  
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Interviewing":
        return "default";
      case "Offer":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm font-body text-muted-foreground">
            {company} • {location}
          </p>
        </div>
        <Badge variant={getStatusVariant(status)} className="w-fit">
          {status}
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <p className="text-xs font-body text-muted-foreground uppercase tracking-wide">
            Progress
          </p>
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1 gap-1">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                      index <= currentStepIndex 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className={`text-xs font-body ${
                    index <= currentStepIndex 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`h-0.5 flex-1 transition-colors ${
                      index < currentStepIndex 
                        ? 'bg-primary' 
                        : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button variant="ghost" className="flex-1">Update Status</Button>
        <Button variant="ghost" className="flex-1 text-destructive hover:text-destructive">Withdraw</Button>
      </CardFooter>
    </Card>
  );
};
