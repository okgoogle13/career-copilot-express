import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import plantFeature from "@/assets/plant-feature.png";
import { FileText, Gift, TrendingUp } from "lucide-react";

export const WelcomeBanner = () => {
  return (
    <Card className="bg-surface-container border-border overflow-hidden">
      <CardContent className="p-6 space-y-4">
        {/* Text Content */}
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Good morning, Nishant!
          </h2>
          <p className="text-sm font-body text-muted-foreground">
            You have 3 upcoming interviews this week.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-2xl overflow-hidden">
          <img
            src={plantFeature}
            alt="Monstera leaves"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface-container-high rounded-xl p-4 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <p className="text-2xl font-heading font-semibold text-foreground">
                8
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Active Applications
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-xl p-4 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <p className="text-2xl font-heading font-semibold text-foreground">
                2
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Offers Received
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-xl p-4 border border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <p className="text-2xl font-heading font-semibold text-foreground">
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
          <Button className="flex-1" size="lg">
            Create New Document
          </Button>
          <Button variant="outline" className="flex-1" size="lg">
            View Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
