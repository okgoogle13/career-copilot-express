import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, MapPin, Building2 } from "lucide-react";

interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  type: string;
  postedDays: number;
}

const opportunities: JobOpportunity[] = [
  { id: "1", title: "Senior Frontend Developer", company: "Atlassian", location: "Sydney, AU", matchScore: 94, type: "Full-time", postedDays: 2 },
  { id: "2", title: "Product Designer", company: "Canva", location: "Sydney, AU", matchScore: 87, type: "Full-time", postedDays: 1 },
  { id: "3", title: "React Engineer", company: "Google", location: "Remote", matchScore: 91, type: "Contract", postedDays: 3 },
  { id: "4", title: "UX Researcher", company: "Spotify", location: "Melbourne, AU", matchScore: 78, type: "Full-time", postedDays: 5 },
  { id: "5", title: "Full Stack Developer", company: "Stripe", location: "Remote", matchScore: 85, type: "Full-time", postedDays: 1 },
  { id: "6", title: "Design Systems Lead", company: "Figma", location: "San Francisco, US", matchScore: 82, type: "Full-time", postedDays: 4 },
];

const JobCard = ({ job }: { job: JobOpportunity }) => (
  <Card className="bg-[var(--color-surface-container)] rounded-[28px] border border-[var(--color-outline-variant)] p-6 relative group hover:border-primary/50 transition-colors">
    {/* Match Score Badge */}
    <Badge className="absolute top-4 right-4 bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary)] border-0 rounded-full px-3 py-1 font-plain">
      {job.matchScore}% Match
    </Badge>
    
    <div className="space-y-4">
      {/* Company Icon */}
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
        <Building2 className="w-6 h-6 text-primary" />
      </div>
      
      {/* Job Details */}
      <div className="space-y-2">
        <h3 className="font-hero text-headline-md text-on-surface pr-20">
          {job.title}
        </h3>
        <p className="font-plain text-on-surface-variant flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {job.company}
        </p>
        <p className="font-plain text-on-surface-variant flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {job.location}
        </p>
      </div>

      {/* Meta Tags */}
      <div className="flex items-center gap-2 pt-2">
        <Badge variant="outline" className="rounded-full border-[var(--color-outline-variant)] text-on-surface-variant">
          {job.type}
        </Badge>
        <span className="text-xs font-plain text-on-surface-variant">
          Posted {job.postedDays === 1 ? 'yesterday' : `${job.postedDays} days ago`}
        </span>
      </div>

      {/* Action Button */}
      <Button className="w-full rounded-full bg-primary text-on-primary hover:bg-primary/90 mt-2">
        View Details
      </Button>
    </div>
  </Card>
);

const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="w-24 h-24 rounded-full bg-[var(--color-surface-container-high)] flex items-center justify-center mb-6">
      <Search className="w-12 h-12 text-on-surface-variant" />
    </div>
    <h3 className="font-hero text-headline-md text-on-surface mb-2">
      No opportunities yet
    </h3>
    <p className="font-plain text-on-surface-variant max-w-md">
      We're searching for the best job matches based on your profile. Check back soon or update your resume to improve your matches.
    </p>
    <Button className="mt-6 rounded-full bg-primary text-on-primary hover:bg-primary/90">
      Update Profile
    </Button>
  </div>
);

const Opportunities = () => {
  const hasOpportunities = opportunities.length > 0;

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        {/* Page Title - Display Small with font-hero */}
        <div>
          <h1 className="font-hero text-display-sm text-on-surface">
            Opportunities
          </h1>
          <p className="font-plain text-on-surface-variant mt-2">
            Discover job opportunities matched to your profile
          </p>
        </div>

        {/* Bento Grid of Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasOpportunities ? (
            opportunities.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Opportunities;
