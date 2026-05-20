import { Card } from "@/components/ui/card";
import { TokenBorder } from "@/components/ui/tokenborder";
import { cn } from "@/lib/utils";
import { TokenCard } from "./ui/tokencard";

interface CurrentTokenBadgesProps {
  currentToken: number;
  nextTokens: number[];
}

export const CurrentTokenBadges = ({ currentToken, nextTokens }: CurrentTokenBadgesProps) => {
  return (

    <div className="mb-4">
      <div className="grid grid-cols-3 gap-3">
        <TokenCard color="hsl(var(--primary))" className="text-primary-foreground relative">

          <p className="text-xs opacity-90">Currently</p>
          <p className="text-2xl font-bold">#{currentToken}</p>

        </TokenCard>

        {
          nextTokens.map((token) => (
            <TokenCard color="hsl(var(--primary-foreground))" key={token}>
              <p className="text-xs opacity-90">Queue</p>
              <p className="text-2xl font-bold">#{token}</p>
            </TokenCard>
          ))
        }

      </div>
    </div>
  );
};
