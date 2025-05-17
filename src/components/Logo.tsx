
import React from "react";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "medium" }) => {
  // Set size based on prop
  const sizeClasses = {
    small: "h-8",
    medium: "h-12",
    large: "h-16",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d3651654-0cf0-43dd-b3dc-62870eada641.png" 
        alt="GeoInfo Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
