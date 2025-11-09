import { AppLayout } from "@/components/layout/AppLayout";

const Applications = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-foreground">
          Applications
        </h1>
        <p className="text-muted-foreground">Track your job applications</p>
      </div>
    </AppLayout>
  );
};

export default Applications;
