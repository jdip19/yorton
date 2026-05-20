import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Phone } from "lucide-react";
import { toast } from "sonner";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess: () => void;
}

export const LoginDialog = ({ open, onOpenChange, onLoginSuccess }: LoginDialogProps) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    if (!mobile) {
      toast.error("Please enter mobile number");
      return;
    }
    toast.success("OTP sent to " + mobile);
    setStep("otp");
  };

  const handleVerify = () => {
    if (!otp || otp.length !== 4 || !name) {
      toast.error("Please fill all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ mobile, name }));
    toast.success("Login successful!");
    onLoginSuccess();
    onOpenChange(false);
    setStep("phone");
    setMobile("");
    setName("");
    setOtp("");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mx-auto mb-4">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
            </div>
          </div>
          <DrawerTitle className="text-2xl">
            {step === "phone" ? "Login Now" : "We sent OTP"}
          </DrawerTitle>
          <p className="text-sm text-muted-foreground mt-2">
            {step === "phone" 
              ? "Fill below details and do quick login"
              : `Check 4 digit OTP on ${mobile}`
            }
          </p>
        </DrawerHeader>

        <div className="p-6 space-y-4">
          {step === "phone" ? (
            <>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-14 bg-foreground rounded-l-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="pl-16 h-14 rounded-xl bg-input border-0"
                />
              </div>
              <Button
                onClick={handleSendOTP}
                className="w-full h-14 text-base font-semibold rounded-xl"
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-14 h-14 text-xl" />
                    <InputOTPSlot index={1} className="w-14 h-14 text-xl" />
                    <InputOTPSlot index={2} className="w-14 h-14 text-xl" />
                    <InputOTPSlot index={3} className="w-14 h-14 text-xl" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 rounded-xl bg-input border-0"
              />
              <Button
                onClick={handleVerify}
                className="w-full h-14 text-base font-semibold rounded-xl"
              >
                Verify
              </Button>
              <div className="flex justify-between items-center text-sm">
                <button className="text-muted-foreground">Didn't receive OTP?</button>
                <Button variant="secondary" size="sm" className="rounded-full">
                  30sec
                </Button>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
