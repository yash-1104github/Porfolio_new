import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground">
            © 2025 Yash Gupta
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={20} className="text-primary fill-red-600" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;