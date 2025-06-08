'use client';
import { useEffect } from "react";

type SnackbarProps = {
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Snackbar({ message, show, onClose }: SnackbarProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300">
      {message}
    </div>
  );
}
