import { AppLayout } from "@/components/layout/AppLayout";
import { ApplicationCard } from "@/components/dashboard/ApplicationCard";

const Applications = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        {/* Page Title - Display Small with font-hero */}
        <div>
          <h1 className="font-hero text-display-sm text-on-surface">
            Application Tracker
          </h1>
          <p className="font-plain text-on-surface-variant mt-2">Track your job applications</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <ApplicationCard 
            title="Frontend Engineer"
            company="Stripe"
            location="Remote"
            status="Interviewing"
            currentStep="Screening"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Applications;
