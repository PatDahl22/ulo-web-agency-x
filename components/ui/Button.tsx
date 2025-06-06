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
    "inline-flex items-center gap-2 text-sm rounded-full px-8 py-3 transition font-medium";
  const styles = {
    dark: "bg-brand-main text-white hover:text-text-base hover:bg-brand-light",
    light:
      "bg-white text-text-base border border-gray-light hover:bg-gray-light",
  };

  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children} <IconArrowWaveRightUp className="w-4 h-4" />
    </a>
  );
}
