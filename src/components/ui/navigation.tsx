import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MessageCircle, Calendar, Home, Compass, User, Dumbbell } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { Chat } from "@/components/Chat";

const getCurrentDate = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return now.toLocaleDateString('es-ES', options);
};

export function Navigation() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              RiwiFit
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )
            }>
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </NavLink>
            
            <NavLink to="/discover" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )
            }>
              <Compass className="h-4 w-4" />
              <span>Descubrir</span>
            </NavLink>
            
            <NavLink to="/exercises" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )
            }>
              <Dumbbell className="h-4 w-4" />
              <span>Ejercicios</span>
            </NavLink>
            
            <NavLink to="/profile" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )
            }>
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Date Display */}
            <div className="hidden lg:flex items-center space-x-2 bg-muted/50 px-3 py-2 rounded-lg">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {getCurrentDate()}
              </span>
            </div>
            
            {/* Chat Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="relative"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Chat</span>
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
      
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </nav>
  );
}