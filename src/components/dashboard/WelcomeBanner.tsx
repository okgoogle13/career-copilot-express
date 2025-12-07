import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import plantBanner from "@/assets/plantbanner.jpg";
import { FileText, Gift, TrendingUp } from "lucide-react";

export const WelcomeBanner = () => {
  return (
    <Card className="bg-surface-container border-border overflow-hidden relative">
      <CardContent className="p-8 space-y-6 relative z-10">
        {/* Text Content - Display Small typography */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight">
            Good morning, Nishant!
          </h2>
          <p className="text-base font-body text-muted-foreground">
            You have 3 upcoming interviews this week.
          </p>
        </div>

        {/* Stats Grid - surfaceContainerHigh background */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-surface-container-high rounded-[28px] p-5 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <p className="text-3xl font-heading font-semibold text-foreground">
                8
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Active Applications
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-[28px] p-5 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              <p className="text-3xl font-heading font-semibold text-foreground">
                2
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Offers Received
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-[28px] p-5 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <p className="text-3xl font-heading font-semibold text-foreground">
                45
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Connections
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button className="flex-1 rounded-xl" size="lg">
            Create New Document
          </Button>
          <Button variant="outline" className="flex-1 rounded-xl" size="lg">
            View Analytics
          </Button>
        </div>
      </CardContent>

      {/* Hero Image at bottom with dark overlay */}
      <div className="relative h-32 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#1A1625]/80 z-10"
          aria-hidden="true"
        />
        <img
          src={plantBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </Card>
  );
};
