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
    <Card className="bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6">
      <CardHeader className="p-0 pb-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-hero text-headline-md text-on-surface">
              {title}
            </h3>
            <p className="text-sm font-plain text-on-surface-variant">
              {company} • {location}
            </p>
          </div>
          <Badge variant={getStatusVariant(status)} className="rounded-full px-3">
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-0 pb-4">
        <p className="text-xs font-plain text-on-surface-variant uppercase tracking-wider mb-4">
          Progress
        </p>
        {/* Connected Pills Progress Tracker */}
        <div className="flex items-center gap-1">
          {steps.map((step, index) => {
            const isActive = index <= currentStepIndex;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step} className="flex items-center flex-1">
                {/* Pill/Capsule Shape */}
                <div 
                  className={`
                    flex-1 py-2 px-3 text-center text-xs font-plain font-medium transition-all
                    ${index === 0 ? 'rounded-l-full' : ''}
                    ${isLast ? 'rounded-r-full' : ''}
                    ${isActive 
                      ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]' 
                      : 'border border-[var(--color-outline-variant)] text-on-surface-variant bg-transparent'
                    }
                  `}
                >
                  {step}
                </div>
                {/* Connector */}
                {!isLast && (
                  <div 
                    className={`w-1 h-6 ${
                      index < currentStepIndex 
                        ? 'bg-[var(--color-primary-container)]' 
                        : 'bg-[var(--color-outline-variant)]'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="p-0 pt-4 gap-3 border-t border-[var(--color-outline-variant)]">
        <Button variant="ghost" className="flex-1 rounded-full text-on-surface hover:bg-[var(--color-surface-container-high)]">
          Update Status
        </Button>
        <Button variant="ghost" className="flex-1 rounded-full text-error hover:bg-error/10">
          Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
};
