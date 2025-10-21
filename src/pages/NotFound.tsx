import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Heart className="w-20 h-20 mx-auto text-primary mb-6 animate-heartbeat" fill="currentColor" />
        <h1 className="font-playfair text-6xl font-bold text-primary mb-4">404</h1>
        <p className="font-playfair text-xl text-muted-foreground mb-8">
          This page seems to have gotten lost on the way to the wedding!
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="font-playfair text-lg px-8 py-3"
        >
          Return to Invitation
        </Button>
      </div>
    </div>
  );
};

export default NotFound;