"use client";

import React from "react";
import { cn } from "@/utils/cn";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={cn("block text-sm font-medium text-text-base mb-1", className)}
    />
  );
}
