import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import plantBanner from "@/assets/plantbanner.jpg";
import { FileText, Gift, TrendingUp } from "lucide-react";

export const WelcomeBanner = () => {
  return (
    <Card className="surface-container border-outline-variant overflow-hidden relative">
      <CardContent className="p-8 space-y-6 relative z-10">
        {/* Text Content - Display Small typography using font-hero */}
        <div className="space-y-2">
          <h2 className="font-hero text-display-sm text-on-surface leading-tight">
            Good morning, Nishant!
          </h2>
          <p className="font-plain text-base text-on-surface-variant">
            You have 3 upcoming interviews this week.
          </p>
        </div>

        {/* Stats Grid - surfaceContainerHigh background */}
        <div className="grid grid-cols-3 gap-4">
          <div className="surface-container-high rounded-card p-5 border border-outline-variant">
            <div className="flex flex-col items-center text-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <p className="font-hero text-3xl font-semibold text-on-surface">
                8
              </p>
              <p className="font-plain text-xs text-on-surface-variant">
                Active Applications
              </p>
            </div>
          </div>
          <div className="surface-container-high rounded-card p-5 border border-outline-variant">
            <div className="flex flex-col items-center text-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              <p className="font-hero text-3xl font-semibold text-on-surface">
                2
              </p>
              <p className="font-plain text-xs text-on-surface-variant">
                Offers Received
              </p>
            </div>
          </div>
          <div className="surface-container-high rounded-card p-5 border border-outline-variant">
            <div className="flex flex-col items-center text-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <p className="font-hero text-3xl font-semibold text-on-surface">
                45
              </p>
              <p className="font-plain text-xs text-on-surface-variant">
                Connections
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - rounded-full per M3 */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button className="flex-1 rounded-full" size="lg">
            Create New Document
          </Button>
          <Button variant="outline" className="flex-1 rounded-full" size="lg">
            View Analytics
          </Button>
        </div>
      </CardContent>

      {/* Hero Image at bottom with dark overlay */}
      <div className="relative h-32 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#141218]/80 z-10"
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