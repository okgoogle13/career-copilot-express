import { AppLayout } from "@/components/layout/AppLayout";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { FileText, Sparkles, TrendingUp } from "lucide-react";
import plantVine from "@/assets/plant-vine.png";
import plantLeaves from "@/assets/plant-leaves.png";
import plantAngular from "@/assets/plant-angular.png";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome to Career Copilot - Your AI-powered co-pilot for landing your dream job
          </p>
        </div>

        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Quick Actions Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickActionCard 
              icon={FileText}
              title="Create Resume"
              plantImage={plantVine}
            />
            <QuickActionCard 
              icon={Sparkles}
              title="AI Analysis"
              plantImage={plantLeaves}
            />
            <QuickActionCard 
              icon={TrendingUp}
              title="Track Applications"
              plantImage={plantAngular}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
