import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  clinicName?: string;
  subtitle?: string;
  userInitials?: string;
}

export const Header = ({ 
  clinicName = "Svedna Clinic", 
  subtitle = "Skin & Wellness Center",
  userInitials = "JU"
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4" style={{ background: "var(--gradient-header)" }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 bg-primary-foreground rounded-full" />
        </div>
        <div>
          <h1 className="font-heading text-xl md:text-2xl font-semibold text-foreground">{clinicName}</h1>
          <p className="text-xs md:text-sm text-foreground">{subtitle}</p>
        </div>
      </div>
      <Avatar className="w-10 h-10 bg-primary shadow-sm">
        <AvatarFallback className="bg-primary text-primary-foreground font-semibold font-heading">
          {userInitials}
        </AvatarFallback>
      </Avatar>
    </header>
  );
};
