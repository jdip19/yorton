import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "./LoginDialog";
import { BookingSuccessDialog } from "./BookingSuccessDialog";
import { TokenBorder } from "@/components/ui/tokenborder";


interface TokenBookingCardProps {
  doctorName: string;
  tokenNumber?: string;
}

export const TokenBookingCard = ({ doctorName, tokenNumber }: TokenBookingCardProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookedToken, setBookedToken] = useState(0);

  const handleBookToken = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setShowLogin(true);
    } else {
      // Book token logic
      const newToken = Math.floor(Math.random() * 50) + 1;
      setBookedToken(newToken);
      setShowSuccess(true);
    }
  };

  const handleLoginSuccess = () => {
    const newToken = Math.floor(Math.random() * 50) + 1;
    setBookedToken(newToken);
    setTimeout(() => setShowSuccess(true), 300);
  };

  return (
    <>
      <Card className="relative shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-3 bg-foreground rounded-t-lg" />
        <CardContent className="pt-8 pb-6 text-center">
          <h3 className="text-lg font-bold mb-6">{doctorName}</h3>
          <div className="text-8xl font-bold text-muted-foreground/20 mb-6">
            {tokenNumber || "#"}
          </div>
          <Button
            onClick={handleBookToken}
            className="w-full max-w-xs bg-primary hover:bg-primary/90"
          >
            Book My Token
          </Button>
        </CardContent>
        <div className="h-4 bg-gradient-to-b from-transparent to-muted/30">
          <TokenBorder />

        </div>
      </Card>

      <LoginDialog
        open={showLogin}
        onOpenChange={setShowLogin}
        onLoginSuccess={handleLoginSuccess}
      />

      <BookingSuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        tokenNumber={bookedToken}
      />
    </>
  );
};
