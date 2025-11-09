import { Button } from "@/components/ui/button";

export const WelcomeBanner = () => {
  return (
    <div className="bg-primary/10 rounded-2xl p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-2xl font-heading font-semibold text-primary">
            You have 3 interviews coming up. You've got this! 🚀
          </h2>
          <p className="text-secondary font-body">
            Your AI-powered career companion is here to help you land your dream job. Let's review your progress and plan your next moves.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 lg:items-end">
          <Button className="w-full lg:w-auto" size="lg">
            Create New Document
          </Button>
          <Button variant="outline" className="w-full lg:w-auto" size="lg">
            View Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};
