import { AppLayout } from "@/components/layout/AppLayout";

const Documents = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-foreground">
          Documents
        </h1>
        <p className="text-muted-foreground">Manage your resumes and cover letters</p>
      </div>
    </AppLayout>
  );
};

export default Documents;
