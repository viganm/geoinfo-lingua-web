import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large" | "xlarge";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "medium" }) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(
    null
  );

  // Updated size classes to be larger
  const sizeClasses = {
    small: "h-6",
    medium: "h-8",
    large: "h-32", // Was h-24, now even bigger
    xlarge: "h-16", // Add this line for extra large
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

    img.src = "/lovable-uploads/logo.png";
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={processedImageUrl || "/lovable-uploads/logo.png"}
        alt="GeoInfo Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
