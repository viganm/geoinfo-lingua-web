
import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "medium" }) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  
  // Updated size classes to be larger
  const sizeClasses = {
    small: "h-12", // Increased from h-8
    medium: "h-16", // Increased from h-12
    large: "h-24", // Increased from h-16
  };
  
  useEffect(() => {
    // Load the original image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = async () => {
      try {
        // Create a canvas to manually remove the background
        // For simple logos with white backgrounds, we can use a simpler approach
        // than ML-based segmentation
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Get the image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Simple background removal - assuming white or near-white background
        for (let i = 0; i < data.length; i += 4) {
          // If pixel is white or very light (background)
          if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
            data[i + 3] = 0; // Set alpha to transparent
          }
        }
        
        // Put the modified image data back on the canvas
        ctx.putImageData(imageData, 0, 0);
        
        // Convert to data URL and set the state
        const dataUrl = canvas.toDataURL("image/png");
        setProcessedImageUrl(dataUrl);
      } catch (error) {
        console.error("Error processing logo image:", error);
      }
    };
    
    img.src = "/lovable-uploads/d3651654-0cf0-43dd-b3dc-62870eada641.png";
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={processedImageUrl || "/lovable-uploads/d3651654-0cf0-43dd-b3dc-62870eada641.png"} 
        alt="GeoInfo Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
