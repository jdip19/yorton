import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { CurrentTokenBadges } from "@/components/CurrentTokenBadges";
import { QueueStats } from "@/components/QueueStats";
import { TokenBookingCard } from "@/components/TokenBookingCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const hasQueue = true; // Toggle for demo

  return (
    <div className="min-h-screen">

      <div className="bg-circle  mx-auto"></div>

      <Header />

      <div className="py-6 space-y-6">

        <div className="px-4 md:px-8 grid grid-cols-1 gap-2 md:grid-cols-[7fr_3fr] md:items-start">
          <div>
            {hasQueue ? (
              <>
                <CurrentTokenBadges currentToken={12} nextTokens={[13, 14]} />
                <QueueStats totalAhead={25} estimatedTime="1h 50m" />
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🧘</div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">No Queue</h2>
                <p className="text-sm text-muted-foreground">
                  Book now & get your turn quickly
                </p>
              </div>
            )}
          </div>

          <div>
            <TokenBookingCard doctorName="Dr. Nikul Agrawat" tokenNumber={hasQueue ? "" : ""} />
          </div>
        </div>

        <div className="px-4 md:px-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Recent History</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
            </Button>
          </div>

          {hasQueue ? (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Dr. Nikul Agrawat</p>
                  <p className="text-sm text-muted-foreground">
                    12 Aug 2025 | 08:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <p className="text-sm text-muted-foreground">
              You can see past history below.
            </p>
          )}
        </div>
      </div>

      <BottomNav variant="patient" />
    </div>
  );
};

export default Home;
