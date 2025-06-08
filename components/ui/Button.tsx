"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { IconArrowWaveRightUp } from "@/components/icons";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "dark" | "light";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "dark",
  href = "#",
  className = "",
}: ButtonProps) {
  const base =
    "w-full inline-flex items-center justify-center gap-2 text-sm rounded-md px-8 py-3 transition font-medium";

  const styles = {
    dark: "bg-brand-main text-white hover:text-text-base hover:bg-brand-light",
    light:
      "bg-brand-light text-text-base border border-gray-light hover:bg-brand-main hover:text-white",
  };

  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children} <IconArrowWaveRightUp className="w-4 h-4" />
    </a>
  );
}
