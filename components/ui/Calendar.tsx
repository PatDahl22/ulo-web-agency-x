"use client";

import React from "react";
interface CalendarProps {
  selected?: Date;
  onSelect?: (date?: Date) => void;
  className?: string;
}

export default function Calendar({
  selected,
  onSelect,
  className = "",
}: CalendarProps) {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]; // ÅÅÅÅ-MM-DD

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const selectedDate = value ? new Date(value) : undefined;
    onSelect?.(selectedDate);
  };

  return (
    <div className={className}>
      <input
        type="date"
        value={selected ? selected.toISOString().split("T")[0] : ""}
        onChange={handleDateChange}
        className="border rounded-md p-2 w-full"
      />
      <p className="mt-2 text-sm text-gray-500">
        📅 Dagens datum: {formattedToday}
      </p>
    </div>
  );
}
