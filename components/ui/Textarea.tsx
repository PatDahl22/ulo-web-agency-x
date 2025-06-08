"use client";

import React from "react";
import { cn } from "@/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full px-4 py-2 border border-gray-light rounded-lg text-sm text-text-base placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-brand-main transition resize-none",
        className
      )}
      rows={4}
    />
  );
}
