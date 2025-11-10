import { AppLayout } from "@/components/layout/AppLayout";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { DocumentCard } from "@/components/dashboard/DocumentCard";
import { Plus } from "lucide-react";
import plantVine from "@/assets/plant-vine.png";

const Documents = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-semibold text-foreground">
            Documents
          </h1>
          <p className="text-muted-foreground">Manage your resumes and cover letters</p>
        </div>

        {/* Create New Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Create New
          </h2>
          <div className="max-w-md">
            <QuickActionCard 
              icon={Plus}
              title="Create New Document"
              plantImage={plantVine}
            />
          </div>
        </div>

        {/* Your Documents Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Your Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocumentCard 
              title="Senior Developer Resume"
              lastUpdated="Last updated 2 days ago"
            />
            <DocumentCard 
              title="Cover Letter - Google"
              lastUpdated="Last updated 5 days ago"
            />
            <DocumentCard 
              title="Community Support Worker Resume"
              lastUpdated="Last updated 1 week ago"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Documents;
