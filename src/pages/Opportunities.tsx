import { AppLayout } from "@/components/layout/AppLayout";

const Opportunities = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-foreground">
          Opportunities
        </h1>
        <p className="text-muted-foreground">Discover job opportunities matched to your profile</p>
      </div>
    </AppLayout>
  );
};

export default Opportunities;
