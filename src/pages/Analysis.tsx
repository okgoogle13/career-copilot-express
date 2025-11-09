import { AppLayout } from "@/components/layout/AppLayout";

const Analysis = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-foreground">
          Analysis
        </h1>
        <p className="text-muted-foreground">Analyze your application performance and insights</p>
      </div>
    </AppLayout>
  );
};

export default Analysis;
