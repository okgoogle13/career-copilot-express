import { AppLayout } from "@/components/layout/AppLayout";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";

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

        {/* Content area - ready for cards and components */}
        <div className="grid gap-6">
          <div className="p-6 bg-card border border-border rounded-2xl">
            <p className="text-foreground">Dashboard content coming soon...</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
