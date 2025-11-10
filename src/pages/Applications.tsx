import { AppLayout } from "@/components/layout/AppLayout";
import { ApplicationCard } from "@/components/dashboard/ApplicationCard";

const Applications = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-semibold text-foreground">
            Application Tracker
          </h1>
          <p className="text-muted-foreground">Track your job applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ApplicationCard 
            title="Senior React Developer"
            company="Google"
            location="Sydney, AU"
            status="Interviewing"
            currentStep="Interview"
          />
          <ApplicationCard 
            title="Product Manager"
            company="Atlassian"
            location="Sydney, AU"
            status="Applied"
            currentStep="Applied"
          />
          <ApplicationCard 
            title="UX Designer"
            company="Canva"
            location="Sydney, AU"
            status="Offer"
            currentStep="Offer"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Applications;
