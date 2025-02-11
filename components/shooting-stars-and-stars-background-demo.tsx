"use client"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const ShootingStarsAndStarsBackgroundDemo = ({
    containerClassName,
    colors,
    dotSize,
    animationSpeed,
  }: {
    containerClassName: string;
    colors: number[][];
    dotSize?: number;
    animationSpeed?: number;
  }) => {  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default ShootingStarsAndStarsBackgroundDemo;

