import { LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  plantImage: string;
}

export const QuickActionCard = ({ icon: Icon, title, plantImage }: QuickActionCardProps) => {
  return (
    <div className="relative overflow-hidden bg-tertiary rounded-2xl p-6 h-40">
      {/* Media Layer - Plant illustration */}
      <img 
        src={plantImage} 
        alt="" 
        className="absolute bottom-0 right-0 w-32 h-32 opacity-70 pointer-events-none"
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col gap-3">
        <Icon className="w-6 h-6 text-tertiary-foreground" />
        <h3 className="text-lg font-body font-semibold text-tertiary-foreground">
          {title}
        </h3>
      </div>
    </div>
  );
};
