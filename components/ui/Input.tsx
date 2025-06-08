"use client";

import React from "react";
import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-4 py-2 border border-gray-light rounded-lg text-sm text-text-base placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-brand-main transition",
        className
      )}
    />
  );
}
