import { AppLayout } from "@/components/layout/AppLayout";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";
import { RecentAchievementsCard } from "@/components/dashboard/RecentAchievementsCard";

const Index = () => {
  return (
    <AppLayout>
      {/* Two-Pane Layout with M3 Spacing (24dp = 6 in Tailwind) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 max-w-[1600px] mx-auto">
        {/* Pane 1 (Left): Main Content */}
        <div className="space-y-6">
          <WelcomeBanner />
        </div>

        {/* Pane 2 (Right): Aside Content */}
        <div className="space-y-6">
          <RecentActivityCard />
          <RecentAchievementsCard />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
