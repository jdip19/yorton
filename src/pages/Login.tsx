import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Phone } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSendOTP = () => {
    if (!name || !mobile) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("OTP sent successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
              <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
            </div>
          </div>
          <h1 className="text-5xl font-bold">Queba</h1>
          <p className="text-2xl font-bold mt-6">Register</p>
          <p className="text-sm text-muted-foreground">
            Fill below details and do quick login
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-14 bg-foreground rounded-l-xl flex items-center justify-center">
              <User className="w-5 h-5 text-background" />
            </div>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-16 h-14 rounded-xl bg-input border-0"
            />
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Login;
