import { cn } from "@/utils/cn";
import React from "react";

// Define types for props
type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

type BentoGridItemProps = {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
};

// BentoGrid Component
export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto", // Adjust grid layout as needed
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  ...props // Spread any additional props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/[0.1] group hover:scale-105 transition-transform",
        className
      )}
      {...props} // Apply additional props
    >
      {/* Image Section */}
      <div className="relative w-full h-60">
        {img && (
          <img
            src={img}
            alt={
              title ? (typeof title === "string" ? title : "Image") : "Image"
            }
            className={cn("object-cover w-full h-full", imgClassName)}
          />
        )}
      </div>
      {/* Content Section */}
      <div
        className={`absolute inset-0 bg-black/50 group-hover:bg-black/75 transition-colors duration-300 flex flex-col justify-end p-4`}
      >
        <h3 className={cn("text-white text-lg font-semibold", titleClassName)}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};
