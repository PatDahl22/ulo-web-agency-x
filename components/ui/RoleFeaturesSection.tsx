"use client";

import { cn } from "@/utils/cn";

export const RoleFeaturesSection = ({
  title,
  description,
  icon,
  index,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
  className?: string;
}) => {
  return (
    <MyroleCard
      title={title}
      description={description}
      icon={icon}
      index={index}
      className={className}
    />
  );
};

export const MyroleCard = ({
  title,
  description,
  icon,
  index,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 relative group dark:border-neutral-800 bg-black-300 h-full w-full rounded-2xl",
        index === 0 ? "lg:border-l dark:border-neutral-800" : "" // Apply left border to the first column
      )}
    >
      {/* Gradient Hover Effect */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-400 dark:from-neutral-600 to-transparent pointer-events-none rounded-2xl" />

      {/* Icon and Title */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        {/* Hover Effect for Title */}
        <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center" />

        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>

      {/* Optional className */}
      <span className={className}></span>
    </div>
  );
};